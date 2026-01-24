import * as vscode from "vscode";
import { runArtisanCommand, runArtisanMakeCommand } from "@src/commands/artisan";

import { CacheClearCommand } from "./commands/CacheClearCommand";
import { CastMakeCommand } from "./commands/CastMakeCommand";
import { ChannelMakeCommand } from "./commands/ChannelMakeCommand";
import { ClassMakeCommand } from "./commands/ClassMakeCommand";
import { CommandMakeCommand } from "./commands/CommandMakeCommand";
import { ComponentMakeCommand } from "./commands/ComponentMakeCommand";
import { ConfigMakeCommand } from "./commands/ConfigMakeCommand";
import { ControllerMakeCommand } from "./commands/ControllerMakeCommand";
import { EnumMakeCommand } from "./commands/EnumMakeCommand";
import { EventMakeCommand } from "./commands/EventMakeCommand";
import { ExceptionMakeCommand } from "./commands/ExceptionMakeCommand";
import { FactoryMakeCommand } from "./commands/FactoryMakeCommand";
import { InterfaceMakeCommand } from "./commands/InterfaceMakeCommand";
import { JobMakeCommand } from "./commands/JobMakeCommand";
import { JobMiddlewareMakeCommand } from "./commands/JobMiddlewareMakeCommand";
import { ListenerMakeCommand } from "./commands/ListenerMakeCommand";
import { LivewireMakeCommand } from "./commands/LivewireMakeCommand";
import { MailMakeCommand } from "./commands/MailMakeCommand";
import { MiddlewareMakeCommand } from "./commands/MiddlewareMakeCommand";
import { MigrationMakeCommand } from "./commands/MigrationMakeCommand";
import { ModelMakeCommand } from "./commands/ModelMakeCommand";
import { NotificationMakeCommand } from "./commands/NotificationMakeCommand";
import { ObserverMakeCommand } from "./commands/ObserverMakeCommand";
import { PolicyMakeCommand } from "./commands/PolicyMakeCommand";
import { ProviderMakeCommand } from "./commands/ProviderMakeCommand";
import { RequestMakeCommand } from "./commands/RequestMakeCommand";
import { ResourceMakeCommand } from "./commands/ResourceMakeCommand";
import { ScopeMakeCommand } from "./commands/ScopeMakeCommand";
import { SeederMakeCommand } from "./commands/SeederMakeCommand";
import { TestMakeCommand } from "./commands/TestMakeCommand";
import { TraitMakeCommand } from "./commands/TraitMakeCommand";
import { ViewMakeCommand } from "./commands/ViewMakeCommand";

const artisanCommands = {
    "artisan.cache.clear": CacheClearCommand,
}

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
    "artisan.make.mail": MailMakeCommand,
    "artisan.make.middleware": MiddlewareMakeCommand,
    "artisan.make.migration": MigrationMakeCommand,
    "artisan.make.model": ModelMakeCommand,
    "artisan.make.notificaiton": NotificationMakeCommand,
    "artisan.make.observer": ObserverMakeCommand,
    "artisan.make.policy": PolicyMakeCommand,
    "artisan.make.provider": ProviderMakeCommand,
    "artisan.make.request": RequestMakeCommand,
    "artisan.make.resource": ResourceMakeCommand,
    "artisan.make.scope": ScopeMakeCommand,
    "artisan.make.seeder": SeederMakeCommand,
    "artisan.make.test": TestMakeCommand,
    "artisan.make.trait": TraitMakeCommand,
    "artisan.make.view": ViewMakeCommand,
};

export const registerArtisanMakeCommands = () => {
    return Object.entries(artisanMakeCommands).map(([name, command]) => {
        return vscode.commands.registerCommand(name, (uri: vscode.Uri) => {
            runArtisanMakeCommand(command, uri);
        });
    });
};

export const registerArtisanCommands = () => {
    return Object.entries(artisanCommands).map(([name, command]) => {
        return vscode.commands.registerCommand(name, (uri: vscode.Uri) => {
            runArtisanCommand(command, uri);
        });
    });
}
