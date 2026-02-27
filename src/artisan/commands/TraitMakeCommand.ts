import { Command, MakeCommand } from "../types";
import { forceOption } from "@src/artisan/options";

export const TraitMakeCommand: MakeCommand = {
    name: "make:trait",
    type: "make",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the trait",
        },
    ],
    options: [forceOption],
};
