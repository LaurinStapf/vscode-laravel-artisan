import * as vscode from "vscode";
import { RegisterdCommand } from "./registeredCommands";

export const commandName = (name: RegisterdCommand) => name;

export const openFileCommand = (
    uri: vscode.Uri,
    lineNumber: number,
    position: number,
) => {
    vscode.window.showTextDocument(uri, {
        selection: new vscode.Range(
            new vscode.Position(lineNumber, position),
            new vscode.Position(lineNumber, position),
        ),
    });
};