import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import { config } from "./config";
import { isPhpEnv } from "./php";

export const getWorkspaceFolders = () =>
    vscode.workspace.workspaceFolders || [];

export const pathForPhpEnv = (srcPath: string): string => {
    return srcPath;
};

export const basePath = (srcPath = ""): string => {
    return path.join(config<string>("basePath", ""), pathForPhpEnv(srcPath));
};

export const projectPath = (srcPath = ""): string => {
    srcPath = basePath(srcPath);

    for (let workspaceFolder of getWorkspaceFolders()) {
        if (
            fs.existsSync(
                path.join(workspaceFolder.uri.fsPath, basePath("artisan")),
            )
        ) {
            return path.join(workspaceFolder.uri.fsPath, srcPath);
        }

        if (fs.existsSync(path.join(workspaceFolder.uri.fsPath, srcPath))) {
            return path.join(workspaceFolder.uri.fsPath, srcPath);
        }
    }

    return "";
};
