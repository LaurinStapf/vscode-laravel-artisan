import * as vscode from "vscode";
import { runArtisanMakeCommand } from "@src/commands/artisan";

import { ControllerMakeCommand } from "./commands/ControllerMakeCommand";
import { info } from "console";
import { CastMakeCommand } from "./commands/CastMakeCommand";

const artisanMakeCommands = {
  "artisan.make.cast": CastMakeCommand,
  "artisan.make.controller": ControllerMakeCommand,
};

export const registerArtisanMakeCommands = () => {
  return Object.entries(artisanMakeCommands).map(([name, command]) => {
    return vscode.commands.registerCommand(name, (uri: vscode.Uri) => {
      runArtisanMakeCommand(command, uri);
    });
  });
};