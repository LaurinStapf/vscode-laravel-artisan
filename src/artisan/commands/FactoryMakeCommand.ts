import { Command } from "../types";

export const FactoryMakeCommand: Command = {
    name: "make:factory",
    type: "make",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the factory",
        },
    ],
    options: [
        {
            name: "--model",
            type: "input",
            description: "The name of the model",
        },
    ],
};
