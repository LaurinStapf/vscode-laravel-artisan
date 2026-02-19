"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import Server from "./commands/base/Serve";
import { info } from "./support/logger";
import { commandName } from "./commands";
import { generateNamespaceCommand } from "./commands/generateNamespace";
import { registerArtisanCommands } from "./artisan/registry";

export async function activate(context: vscode.ExtensionContext) {
    info("Activiating Laravel Artisan extension...");

    context.subscriptions.push(
        vscode.commands.registerCommand(
            commandName("artisan.namespace.generate"),
            generateNamespaceCommand,
        ),
    );

    info("Started");
    console.log("Laravel Artisan VS Code Started...");

    context.subscriptions.push(...registerArtisanCommands());
}

export function deactivate() {
    info("Stoped");
    Server.stop();
}
