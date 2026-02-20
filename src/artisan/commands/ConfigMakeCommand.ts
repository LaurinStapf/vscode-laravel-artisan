import { Command, MakeCommand } from "../types";
import { forceOption } from "../options";

export const ConfigMakeCommand: MakeCommand = {
    name: "make:config",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the config",
        },
    ],
    options: [forceOption],
};
