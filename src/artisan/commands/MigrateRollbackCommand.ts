import { Command, RunCommand } from "../types";

export const MigrateRollbackCommand: RunCommand = {
    name: "migrate:rollback",
    type: "run",
    successMessage: "Rolled back migration(s).",
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
        {
            name: "--step",
            type: "input",
            description: "The number of migrations to be reverted",
            excludeIf: ["--batch"],
        },
        {
            name: "--batch",
            type: "input",
            description:
                "The batch of migrations (identified by their batch number) to be reverted",
            excludeIf: ["--step"],
        },
    ],
};
