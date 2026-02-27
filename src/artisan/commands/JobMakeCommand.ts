import { Command, MakeCommand } from "../types";
import { forceOption, testOptions } from "@src/artisan/options";

export const JobMakeCommand: MakeCommand = {
    name: "make:job",
    type: "make",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the job",
        },
    ],
    options: [
        {
            name: "--sync",
            description: "Indicates that job should be synchronous",
        },
        ...testOptions,
        forceOption,
    ],
};
