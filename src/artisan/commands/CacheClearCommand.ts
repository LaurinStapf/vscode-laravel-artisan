import { Command, RunCommand } from "../types";

export const CacheClearCommand: RunCommand = {
    name: "cache:clear",
    type: "run",
    options: [
        {
            name: "--tags",
            type: "input",
            description: "The cache tags you would like to clear",
        },
    ],
};
