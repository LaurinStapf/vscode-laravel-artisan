import { Command, MakeCommand } from "../types";
import { forceOption } from "@src/artisan/options";

export const ProviderMakeCommand: MakeCommand = {
    name: "make:provider",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the service provider",
        },
    ],
    options: [forceOption],
};
