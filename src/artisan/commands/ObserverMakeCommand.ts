import { Command, MakeCommand } from "../types";

export const ObserverMakeCommand: MakeCommand = {
    name: "make:observer",
    type: "make",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the observer",
        },
    ],
    options: [
        {
            name: "--model",
            type: "input",
            description: "The model that the observer applies to",
        },
    ],
};
