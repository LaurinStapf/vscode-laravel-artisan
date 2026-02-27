import { Command, MakeCommand } from "../types";
import { forceOption, testOptions } from "@src/artisan/options";

export const LivewireMakeCommand: MakeCommand = {
    name: "make:livewire",
    type: "make",
    arguments: [
        {
            name: "name",
            type: "path",
            description: "The name of the Livewire component",
        },
    ],
    options: [
        {
            name: "--inline",
            description: "Create a component that renders an inline view",
        },
        ...testOptions,
        forceOption,
    ],
};
