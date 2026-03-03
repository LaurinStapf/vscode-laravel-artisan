import { Command, RunCommand } from "../types";

export const DatabaseSeedCommand: RunCommand = {
    name: "db:seed",
    type: "run",
    options: [
        {
            name: "--class",
            type: "input",
            description: "The class name of the root seeder",
        },
        {
            name: "--database",
            type: "input",
            description: "The database connection to seed",
        },
        {
            name: "--force",
            description: "Force the operation to run when in production",
        },
    ],
};
