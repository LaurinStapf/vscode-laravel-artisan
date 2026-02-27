import { Command, MakeCommand } from "../types";

export const PolicyMakeCommand: MakeCommand = {
    name: "make:policy",
    type: "make",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the policy",
        },
    ],
    options: [
        {
            name: "--model",
            type: "input",
            description: "The model that the policy applies to",
        },
        {
            name: "--guard",
            type: "input",
            description: "The guard that the policy relies on",
        },
    ],
};
