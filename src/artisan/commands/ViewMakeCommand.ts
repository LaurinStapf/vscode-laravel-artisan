import { Command, MakeCommand } from "../types";
import { forceOption, testOptions } from "@src/artisan/options";

export const ViewMakeCommand: MakeCommand = {
    name: "make:view",
    arguments: [
        {
            name: "name",
            type: "path",
            description: "The name of the view",
        },
    ],
    options: [...testOptions, forceOption],
};
