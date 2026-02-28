import * as vscode from "vscode";

import { artisan } from "@src/support/php";
import { buildArtisanCommand } from "@src/artisan/builder";
import { Command } from "@src/artisan/types";
import { getPathFromOutput } from "@src/support/artisan";
import { getWorkspaceFolders } from "@src/support/project";
import { openFileCommand } from ".";
import { parseJson, openTableWebview } from "@src/support/table";
import { showSuccessPopup } from "@src/support/popup";

export const runArtisanMakeCommand = async (
    command: Command,
    uri?: vscode.Uri | undefined,
) => {
    const result = await runCommand(command, uri);

    if (!result) {
        return;
    }

    const outputPath = getPathFromOutput(
        result.output,
        command.name,
        result.workspaceFolder,
        result.uri,
    );

    if (outputPath) {
        openFileCommand(vscode.Uri.file(outputPath), 1, 1);
    }
};

export const runArtisanCommand = async (command: Command, uri?: vscode.Uri) => {
    const result = await runCommand(command, uri);

    if (!result) {
        return;
    }

    switch (command.type) {
        case "make":
            const outputPath = getPathFromOutput(
                result.output,
                command.name,
                result.workspaceFolder,
                result.uri,
            );

            if (outputPath) {
                openFileCommand(vscode.Uri.file(outputPath), 1, 1);
            }

            break;

        case "table":
            const config = command.table;

            const data = parseJson(result.output);
            const viewId = `artisan-${command.name.replace(/[^a-z0-9]/gi, "-")}`;

            openTableWebview(viewId, config.title, data);

            break;

        case "run":
        default:
            let lines = result.output
                .split("\n")
                .filter((line) => line.trim() !== "");

            if (!command.successMessage || lines.length === 1) {
                showSuccessPopup(result.output);
                return;
            }

            showSuccessPopup(command.successMessage);

            break;
    }
};

export const runCommand = async (
    command: Command,
    uri?: vscode.Uri | undefined,
) => {
    const workspaceFolder = getWorkspaceFolder(uri);

    if (!workspaceFolder) {
        vscode.window.showErrorMessage("Cannot detect active workspace");

        return;
    }

    uri ??= vscode.Uri.joinPath(workspaceFolder.uri);

    const artisanCommand = await buildArtisanCommand(
        command,
        uri,
        workspaceFolder,
    );

    if (!artisanCommand) {
        return;
    }

    const output = await artisan(artisanCommand, workspaceFolder.uri.path);

    const error = output.match(/ERROR\s+(.*)/);

    if (error?.[1]) {
        vscode.window.showErrorMessage(error[1]);

        return;
    }

    return { output, workspaceFolder, uri };
};

const getWorkspaceFolder = (
    uri: vscode.Uri | undefined,
): vscode.WorkspaceFolder | undefined => {
    if (uri) {
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri);

        if (workspaceFolder) {
            return workspaceFolder;
        }
    }

    if (vscode.window.activeTextEditor) {
        const fileUri = vscode.window.activeTextEditor.document.uri;

        const workspaceFolder = vscode.workspace.getWorkspaceFolder(fileUri);

        if (workspaceFolder) {
            return workspaceFolder;
        }
    }

    return getWorkspaceFolders()?.[0];
};
