import Common from '../../Common'

export default class Migrate extends Common {

  public static async run() {

    let database = await this.getInput('What database should I use?')
    let seed = await this.getYesNo('Should I seed the database for you?')

    let command = `migrate ${seed ? '--seed' : ''} ${database.length > 0 ? '--database=' + database : ''}`

    this.execCmd(command, async (info) => {
      const output = info.stdout + info.stderr;

      if (info.err || /SQLSTATE|error|failed|already exists/i.test(output)) {
        this.showError('The migration failed.', output)
      } else {
        this.showMessage('The migration has completed')
      }
    })
  }
}