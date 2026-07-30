"use strict";

import * as vscode from "vscode";

import { info } from "./support/logger";
import { commandName } from "./commands";
import { generateNamespaceCommand } from "./commands/generateNamespace";
import {
    registerArtisanCommands,
    registerArtisanMakeCommands,
} from "./artisan/registry";

export async function activate(context: vscode.ExtensionContext) {
    info("Activiating Laravel Artisan extension…");

    context.subscriptions.push(
        vscode.commands.registerCommand(
            commandName("artisan.namespace.generate"),
            generateNamespaceCommand,
        ),
    );

    info("Started");
    console.log("Laravel Artisan VS Code Started…");

    context.subscriptions.push(
        ...registerArtisanMakeCommands(),
        ...registerArtisanCommands(),
    );
}

export function deactivate() {
    info("Stoped");
}
