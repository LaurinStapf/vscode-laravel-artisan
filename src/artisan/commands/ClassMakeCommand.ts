import { MakeCommand } from "../types";

export const ClassMakeCommand: MakeCommand = {
    name: "make:class",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the class",
        },
    ],
    options: [
        {
            name: "--invokable",
            description: "Generate a single method, invokable class",
        },
    ],
};
