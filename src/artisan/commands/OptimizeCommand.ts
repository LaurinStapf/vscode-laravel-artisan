import { Command, RunCommand } from "../types";

export const OptimizeCommand: RunCommand = {
    name: "optimize",
    options: [
        {
            name: "--except",
            type: "input",
            description: "Do not run the commands matching the key or name",
        },
    ],
};
