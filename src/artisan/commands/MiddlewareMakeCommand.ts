import { Command, MakeCommand } from "../types";
import { forceOption } from "@src/artisan/options";

export const MiddlewareMakeCommand: MakeCommand = {
    name: "make:middleware",
    type: "make",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the middleware",
        },
    ],
    options: [forceOption],
};
