import * as vscode from "vscode";
import { RegisteredCommand } from "./generatedRegisteredCommands";

export const commandName = (name: RegisteredCommand) => name;

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
