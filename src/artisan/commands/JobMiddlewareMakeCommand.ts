import { Command, MakeCommand } from "../types";
import { forceOption, testOptions } from "@src/artisan/options";

export const JobMiddlewareMakeCommand: MakeCommand = {
    name: "make:job-middleware",
    type: "make",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the job middleware",
        },
    ],
    options: [...testOptions, forceOption],
};
