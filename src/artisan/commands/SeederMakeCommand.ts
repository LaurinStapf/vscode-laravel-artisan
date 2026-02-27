import { Command, MakeCommand } from "../types";

export const SeederMakeCommand: MakeCommand = {
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
