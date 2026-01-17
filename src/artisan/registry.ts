import * as vscode from "vscode";
import { runArtisanMakeCommand } from "@src/commands/artisan";

import { ControllerMakeCommand } from "./commands/ControllerMakeCommand";
import { info } from "console";
import { CastMakeCommand } from "./commands/CastMakeCommand";
import { ChannelMakeCommand } from "./commands/ChannelMakeCommand";
import { ClassMakeCommand } from "./commands/ClassMakeCommand";
import { CommandMakeCommand } from "./commands/CommandMakeCommand";

const artisanMakeCommands = {
    "artisan.make.cast": CastMakeCommand,
    "artisan.make.channel": ChannelMakeCommand,
    "artisan.make.class": ClassMakeCommand,
    "artisan.make.command": CommandMakeCommand,
    "artisan.make.controller": ControllerMakeCommand,
};

export const registerArtisanMakeCommands = () => {
    return Object.entries(artisanMakeCommands).map(([name, command]) => {
        return vscode.commands.registerCommand(name, (uri: vscode.Uri) => {
            runArtisanMakeCommand(command, uri);
        });
    });
};
