import { Command, MakeCommand } from "../types";

export const FactoryMakeCommand: MakeCommand = {
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
