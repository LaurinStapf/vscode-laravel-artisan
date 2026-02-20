import { Command, MakeCommand } from "../types";
import { forceOption } from "@src/artisan/options";

export const ScopeMakeCommand: MakeCommand = {
    name: "make:scope",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the scope",
        },
    ],
    options: [forceOption],
};
