import { Command } from "../types";

export const DownCommand: Command = {
    name: "down",
    options: [
        {
            name: "--redirect",
            description: "The path that users should be redirected to",
            type: "input",
            excludeIf: ["--render"],
        },
        {
            name: "--render",
            description:
                "The view that should be prerendered for display during maintenance mode",
            type: "input",
            excludeIf: ["--redirect"],
        },
        {
            name: "--retry",
            description:
                "The number of seconds or the datetime after which the request may be retried",
            type: "input",
        },
        {
            name: "--refresh",
            description:
                "The number of seconds after which the browser may refresh",
            type: "input",
        },
        {
            name: "--secret",
            description:
                "The secret phrase that may be used to bypass maintenance mode",
            type: "input",
            excludeIf: ["--with-secret"],
        },
        {
            name: "--with-secret",
            description: "Generate a resource controller for the given model",
            excludeIf: ["--secret"],
        },
        {
            name: "--status",
            description:
                "The status code that should be used when returning the maintenance mode response",
            type: "input",
        },
    ],
};
