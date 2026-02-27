import { Command, MakeCommand } from "../types";

export const ExceptionMakeCommand: MakeCommand = {
    name: "make:exception",
    type: "make",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the exception",
        },
    ],
    options: [
        {
            name: "--render",
            description: "Create the exception with an empty render method",
        },
        {
            name: "--report",
            description: "Create the exception with an empty report method",
        },
    ],
};
