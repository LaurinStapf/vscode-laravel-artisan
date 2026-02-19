import { Command } from "../types";

export const ResourceMakeCommand: Command = {
    name: "make:resource",
    type: "make",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the resource",
        },
    ],
    options: [
        {
            name: "--collection",
            description: "Create a resource collection",
        },
    ],
};
