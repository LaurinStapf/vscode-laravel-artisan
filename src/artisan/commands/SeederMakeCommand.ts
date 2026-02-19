import { Command } from "../types";

export const SeederMakeCommand: Command = {
    name: "make:seeder",
    type: "make",
    arguments: [
        {
            name: "name",
            type: "path",
            description: "The name of the seeder",
        },
    ],
};
