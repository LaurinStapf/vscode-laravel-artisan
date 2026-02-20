import { Command, RunCommand } from "../types";

export const MigrateInstallCommand: RunCommand = {
    name: "migrate:install",
    options: [
        {
            name: "--database",
            type: "input",
            description: "The database connection to use",
        },
    ],
};
