import { MakeCommand } from "../types";

export const CastMakeCommand: MakeCommand = {
    name: "make:cast",
    type: "make",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the cast class",
        },
    ],
    options: [
        {
            name: "--inbound",
            description: "Generate an inbound cast class",
        },
    ],
};
