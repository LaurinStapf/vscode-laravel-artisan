import { Command, RunCommand } from "../types";

export const DocsCommand: RunCommand = {
    name: "docs",
    arguments: [
        {
            name: "page",
            type: "input",
            description: "The documentation page to open",
            allowSpaces: true,
        },
        {
            name: "section",
            type: "input",
            description: "The section of the page to open",
            allowSpaces: true,
            isOptional: true,
        },
    ],
};
