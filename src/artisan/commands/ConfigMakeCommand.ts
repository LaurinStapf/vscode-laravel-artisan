import { Command } from "../types";
import { forceOption } from "../options";

export const ConfigMakeCommand: Command = {
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
