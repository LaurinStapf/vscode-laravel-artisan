import { Command, MakeCommand } from "../types";
import { forceOption } from "@src/artisan/options";

export const EventMakeCommand: MakeCommand = {
    name: "make:event",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the event",
        },
    ],
    options: [forceOption],
};
