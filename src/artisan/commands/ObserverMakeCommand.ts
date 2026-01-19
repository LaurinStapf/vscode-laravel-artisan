import { Command } from "../types";

export const ObserverMakeCommand: Command = {
    name: "make:observer",
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
