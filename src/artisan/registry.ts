import * as vscode from "vscode";
import { runArtisanMakeCommand } from "@src/commands/artisan";

import { ControllerMakeCommand } from "./commands/ControllerMakeCommand";
import { info } from "console";
import { CastMakeCommand } from "./commands/CastMakeCommand";
import { ChannelMakeCommand } from "./commands/ChannelMakeCommand";
import { ClassMakeCommand } from "./commands/ClassMakeCommand";
import { CommandMakeCommand } from "./commands/CommandMakeCommand";
import { ComponentMakeCommand } from "./commands/ComponentMakeCommand";
import { EnumMakeCommand } from "./commands/EnumMakeCommand";
import { EventMakeCommand } from "./commands/EventMakeCommand";
import { ConfigMakeCommand } from "./commands/ConfigMakeCommand";
import { ExceptionMakeCommand } from "./commands/ExceptionMakeCommand";
import { FactoryMakeCommand } from "./commands/FactoryMakeCommand";
import { InterfaceMakeCommand } from "./commands/InterfaceMakeCommand";
import { JobMakeCommand } from "./commands/JobMakeCommand";
import { JobMiddlewareMakeCommand } from "./commands/JobMiddlewareMakeCommand";
import { ListenerMakeCommand } from "./commands/ListenerMakeCommand";
import { LivewireMakeCommand } from "./commands/LivewireMakeCommand";

const artisanMakeCommands = {
    "artisan.make.cast": CastMakeCommand,
    "artisan.make.channel": ChannelMakeCommand,
    "artisan.make.class": ClassMakeCommand,
    "artisan.make.command": CommandMakeCommand,
    "artisan.make.component": ComponentMakeCommand,
    "artisan.make.config": ConfigMakeCommand,
    "artisan.make.controller": ControllerMakeCommand,
    "artisan.make.enum": EnumMakeCommand,
    "artisan.make.event": EventMakeCommand,
    "artisan.make.exception": ExceptionMakeCommand,
    "artisan.make.factory": FactoryMakeCommand,
    "artisan.make.interface": InterfaceMakeCommand,
    "artisan.make.job": JobMakeCommand,
    "artisan.make.job-middleware": JobMiddlewareMakeCommand,
    "artisan.make.listener": ListenerMakeCommand,
    "artisan.make.livewire": LivewireMakeCommand,
};

export const registerArtisanMakeCommands = () => {
    return Object.entries(artisanMakeCommands).map(([name, command]) => {
        return vscode.commands.registerCommand(name, (uri: vscode.Uri) => {
            runArtisanMakeCommand(command, uri);
        });
    });
};
