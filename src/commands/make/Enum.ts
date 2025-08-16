import Common from "../../Common";
import * as path from "path";
const fs = require('fs').promises;

declare type EnumType = 'pure' | 'string' | 'integer';

export default class MakeEnum extends Common {
  public static async run() {
    let enumName = await this.getInput('Enum Name');
    if (enumName.length === 0) {
      this.showError('An enum name is required');
      return;
    }

    let type = (await this.getListInput('What type of enum would you like?', ['Pure', 'String', 'Integer'])).toLowerCase() as EnumType;
    let typeCommand = type === 'string' ? '--string' : type === 'integer' ? '--int' : '';

    let command = `make:enum ${enumName} ${typeCommand}`;

    // Generate the enum
    this.execCmd(command, async info => {
      if (info.err) {
        this.showError('Could not create the enum', info.err);
      }

      const candidates = [
        path.join(info.artisan.dir, "app/Enums", `${enumName}.php`),
        path.join(info.artisan.dir, "app/Enumerations", `${enumName}.php`),
        path.join(info.artisan.dir, "app", `${enumName}.php`),
      ];

      for (const filePath of candidates) {
        try {
          await fs.access(filePath);
          const relPath = filePath.replace(info.artisan.dir, "");
          await this.openFile(info.artisan.dir, relPath);
          return;
        } catch {
          //
        }
      }

      this.showError('Could not create the enum', info.err);
    });
  }
}