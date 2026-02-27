import { Command, RunCommand } from "../types";

export const MigrateRefreshCommand: RunCommand = {
    name: "migrate:refresh",
    type: "run",
    successMessage: "Refreshed database.",
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
                " Indicate any provided migration file paths are pre-resolved absolute paths",
        },
        {
            name: "--seed",
            description: "Indicates if the seed task should be re-run",
            excludeIf: ["--seeder"],
        },
        {
            name: "--seeder",
            type: "input",
            description: "The class name of the root seeder",
            excludeIf: ["--seed"],
        },
        {
            name: "--step",
            type: "input",
            description: "The number of migrations to be reverted & re-run",
        },
    ],
};
