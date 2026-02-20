import { MakeCommand } from "../types";
import { forceOption } from "../options";

export const ChannelMakeCommand: MakeCommand = {
    name: "make:channel",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the channel",
        },
    ],
    options: [forceOption],
};
