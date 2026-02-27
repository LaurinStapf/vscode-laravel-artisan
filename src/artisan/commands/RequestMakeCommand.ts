import { Command, MakeCommand } from "../types";
import { forceOption } from "@src/artisan/options";

export const RequestMakeCommand: MakeCommand = {
    name: "make:request",
    type: "make",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the request",
        },
    ],
    options: [forceOption],
};
