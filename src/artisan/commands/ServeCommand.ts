import { Command } from "../types";

export const ServeCommand: Command = {
    name: "serve",
    runIn: "terminal",
    options: [
        {
            name: "--host",
            type: "input",
            default: "127.0.0.1",
            description: "The host address to serve the application on",
        },
        {
            name: "--port",
            type: "input",
            description: "The port to serve the application on",
        },
        {
            name: "--tries",
            type: "input",
            default: "10",
            description: "The max number of ports to attempt to serve",
        },
        {
            name: "--no-reload",
            description:
                "Do not reload the development server on .env file changes",
        },
    ],
};
