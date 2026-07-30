import * as vscode from "vscode";
import { runArtisanCommand } from "@src/commands/artisan";

import { CacheClearCommand } from "./commands/CacheClearCommand";
import { CacheTableCommand } from "./commands/CacheTableCommand";
import { CastMakeCommand } from "./commands/CastMakeCommand";
import { ChannelMakeCommand } from "./commands/ChannelMakeCommand";
import { ClassMakeCommand } from "./commands/ClassMakeCommand";
import { CommandMakeCommand } from "./commands/CommandMakeCommand";
import { CompiledClearCommand } from "./commands/CompiledClearCommand";
import { ComponentMakeCommand } from "./commands/ComponentMakeCommand";
import { ConfigCacheCommand } from "./commands/ConfigCacheComand";
import { ConfigClearCommand } from "./commands/ConfigClearCommand";
import { ConfigMakeCommand } from "./commands/ConfigMakeCommand";
import { ControllerMakeCommand } from "./commands/ControllerMakeCommand";
import { DatabaseSeedCommand } from "./commands/DatabaseSeedCommand";
import { DocsCommand } from "./commands/DocsCommand";
import { DownCommand } from "./commands/DownCommand";
import { EnumMakeCommand } from "./commands/EnumMakeCommand";
import { EventGenerateCommand } from "./commands/EventGenerateCommand";
import { EventMakeCommand } from "./commands/EventMakeCommand";
import { ExceptionMakeCommand } from "./commands/ExceptionMakeCommand";
import { FactoryMakeCommand } from "./commands/FactoryMakeCommand";
import { InterfaceMakeCommand } from "./commands/InterfaceMakeCommand";
import { JobMakeCommand } from "./commands/JobMakeCommand";
import { JobMiddlewareMakeCommand } from "./commands/JobMiddlewareMakeCommand";
import { KeyGenerateCommand } from "./commands/KeyGenerateCommand";
import { ListenerMakeCommand } from "./commands/ListenerMakeCommand";
import { LivewireMakeCommand } from "./commands/LivewireMakeCommand";
import { MailMakeCommand } from "./commands/MailMakeCommand";
import { MiddlewareMakeCommand } from "./commands/MiddlewareMakeCommand";
import { MigrateCommand } from "./commands/MigrateCommand";
import { MigrateFreshCommand } from "./commands/MigrateFreshCommand";
import { MigrateInstallCommand } from "./commands/MigrateInstallCommand";
import { MigrateRefreshCommand } from "./commands/MigrateRefreshCommand";
import { MigrateResetCommand } from "./commands/MigrateResetCommand";
import { MigrateRollbackCommand } from "./commands/MigrateRollbackCommand";
import { MigrationMakeCommand } from "./commands/MigrationMakeCommand";
import { ModelMakeCommand } from "./commands/ModelMakeCommand";
import { NotificationMakeCommand } from "./commands/NotificationMakeCommand";
import { ObserverMakeCommand } from "./commands/ObserverMakeCommand";
import { OptimizeCommand } from "./commands/OptimizeCommand";
import { PolicyMakeCommand } from "./commands/PolicyMakeCommand";
import { ProviderMakeCommand } from "./commands/ProviderMakeCommand";
import { RequestMakeCommand } from "./commands/RequestMakeCommand";
import { ResourceMakeCommand } from "./commands/ResourceMakeCommand";
import { RouteCacheCommand } from "./commands/RouteCacheCommand";
import { RouteClearCommand } from "./commands/RouteClearCommand";
import { RouteListCommand } from "./commands/RouteListCommand";
import { ScopeMakeCommand } from "./commands/ScopeMakeCommand";
import { SeederMakeCommand } from "./commands/SeederMakeCommand";
import { TestMakeCommand } from "./commands/TestMakeCommand";
import { TraitMakeCommand } from "./commands/TraitMakeCommand";
import { UpCommand } from "./commands/UpCommand";
import { ViewCacheCommand } from "./commands/ViewCacheCommand";
import { ViewClearCommand } from "./commands/ViewClearCommand";
import { ViewMakeCommand } from "./commands/ViewMakeCommand";
import { DbSeedCommand } from "./commands/DbSeedCommand";
import { DbCommand } from "./commands/DbCommand";
import { DbTableCommand } from "./commands/DbTableCommand";
import { DbWipeCommand } from "./commands/DbWipeCommand";
import { MigrateStatusCommand } from "./commands/MigrateStatusCommand";
import { TinkerCommand } from "./commands/TinkerCommand";
import { PailCommand } from "./commands/PailCommand";
import { EventListCommand } from "./commands/EventListCommand";
import { ModelShowCommand } from "./commands/ModelShowCommand";
import { PestDatasetCommand } from "./commands/PestDatasetCommand";
import { QueueClearCommand } from "./commands/QueueClearCommand";
import { QueueFailedCommand } from "./commands/QueueFailedCommand";
import { QueueFlushCommand } from "./commands/QueueFlushCommand";
import { QueueForgetCommand } from "./commands/QueueForgetCommand";
import { QueueRetryCommand } from "./commands/QueueRetryCommand";
import { ScheduleListCommand } from "./commands/ScheduleListCommand";
import { ScheduleTestCommand } from "./commands/ScheduleTestCommand";
import { SchemaDumpCommand } from "./commands/SchemaDumpCommand";
import { WayfinderGenerateCommand } from "./commands/WayfinderGenerateCommand";
import { AuthClearResetsCommand } from "./commands/AuthClearResetsCommand";
import { ServeCommand } from "./commands/ServeCommand";

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
    "artisan.make.job-middleware": JobMiddlewareMakeCommand,
    "artisan.make.job": JobMakeCommand,
    "artisan.make.listener": ListenerMakeCommand,
    "artisan.make.livewire": LivewireMakeCommand,
    "artisan.make.mail": MailMakeCommand,
    "artisan.make.middleware": MiddlewareMakeCommand,
    "artisan.make.migration": MigrationMakeCommand,
    "artisan.make.model": ModelMakeCommand,
    "artisan.make.notification": NotificationMakeCommand,
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
            runArtisanCommand(command, uri);
        });
    });
};

const artisanCommands = {
    "artisan.auth.clearResets": AuthClearResetsCommand,
    "artisan.cache.clear": CacheClearCommand,
    "artisan.config.cache": ConfigCacheCommand,
    "artisan.config.clear": ConfigClearCommand,
    "artisan.db": DbCommand,
    "artisan.db.seed": DbSeedCommand,
    "artisan.db.table": DbTableCommand,
    "artisan.db.wipe": DbWipeCommand,
    "artisan.event.list": EventListCommand,
    "artisan.key.generate": KeyGenerateCommand,
    "artisan.migrate": MigrateCommand,
    "artisan.migrate.fresh": MigrateFreshCommand,
    "artisan.migrate.refresh": MigrateRefreshCommand,
    "artisan.migrate.rollback": MigrateRollbackCommand,
    "artisan.migrate.status": MigrateStatusCommand,
    "artisan.model.show": ModelShowCommand,
    "artisan.pail": PailCommand,
    "artisan.pest.dataset": PestDatasetCommand,
    "artisan.queue.clear": QueueClearCommand,
    "artisan.queue.failed": QueueFailedCommand,
    "artisan.queue.flush": QueueFlushCommand,
    "artisan.queue.forget": QueueForgetCommand,
    "artisan.queue.retry": QueueRetryCommand,
    "artisan.route.cache": RouteCacheCommand,
    "artisan.route.clear": RouteClearCommand,
    "artisan.route.list": RouteListCommand,
    "artisan.schedule.list": ScheduleListCommand,
    "artisan.schedule.test": ScheduleTestCommand,
    "artisan.schema.dump": SchemaDumpCommand,
    "artisan.serve": ServeCommand,
    "artisan.tinker": TinkerCommand,
    "artisan.view.cache": ViewCacheCommand,
    "artisan.view.clear": ViewClearCommand,
    "artisan.wayfinder.generate": WayfinderGenerateCommand,
};

export const registerArtisanCommands = () => {
    return Object.entries(artisanCommands).map(([name, command]) => {
        return vscode.commands.registerCommand(name, (uri: vscode.Uri) => {
            runArtisanCommand(command, uri);
        });
    });
};
