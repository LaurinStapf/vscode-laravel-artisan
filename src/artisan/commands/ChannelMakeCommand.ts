import { Command } from "../types";
import { forceOption } from "../options";

export const ChannelMakeCommand: Command = {
    name: "make:channel",
    type: "make",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the channel",
        },
    ],
    options: [forceOption],
};
