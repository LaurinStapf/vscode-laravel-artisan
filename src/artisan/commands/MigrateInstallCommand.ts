import { Command } from "../types";

export const MigrateInstallCommand: Command = {
    name: "migrate:install",
    options: [
        {
            name: "--database",
            type: "input",
            description: "The database connection to use",
        },
    ],
};
