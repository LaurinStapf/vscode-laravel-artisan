import { Command, MakeCommand } from "../types";
import { forceOption, testOptions } from "@src/artisan/options";

export const ListenerMakeCommand: MakeCommand = {
    name: "make:listener",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the listener",
        },
    ],
    options: [
        {
            name: "--queued",
            description: "Indicates that listener should be queued",
        },
        ...testOptions,
        forceOption,
    ],
};
