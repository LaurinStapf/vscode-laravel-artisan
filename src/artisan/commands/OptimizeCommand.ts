import { Command } from "../types";

export const OptimizeCommand: Command = {
    name: "optimize",
    options: [
        {
            name: "--except",
            type: "input",
            description: "Do not run the commands matching the key or name",
        },
    ],
};
