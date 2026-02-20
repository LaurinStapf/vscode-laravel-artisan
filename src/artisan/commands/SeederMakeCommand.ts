import { Command, MakeCommand } from "../types";

export const SeederMakeCommand: MakeCommand = {
    name: "make:seeder",
    arguments: [
        {
            name: "name",
            type: "path",
            description: "The name of the seeder",
        },
    ],
};
