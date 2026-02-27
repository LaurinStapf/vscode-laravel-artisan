import { Command, RunCommand } from "../types";

export const MigrateResetCommand: RunCommand = {
    name: "migrate:reset",
    type: "run",
    successMessage: "Reseted database.",
    options: [
        {
            name: "--database",
            type: "input",
            description: "The database connection to use",
        },
        {
            name: "--force",
            description: "Force the operation to run when in production",
        },
        {
            name: "--path",
            type: "input",
            description: "The path(s) to the migrations files to be executed",
        },
        {
            name: "--realpath",
            description:
                "Indicate any provided migration file paths are pre-resolved absolute paths",
        },
    ],
};
