import * as vscode from "vscode";

export type ConfigKey =
    | "php.location"
    | "basePath"
    | "phpEnvironment"
    | "phpCommand"
    | "showErrorPopups"
    | "docker.enabled"
    | "docker.command"
    | "wsl.enabled"
    | "maxBuffer"
    | "location";

export const config = <T>(key: ConfigKey, fallback: T): T =>
    vscode.workspace.getConfiguration("Artisan").get<T>(key, fallback);

export const configKey = <T>(key: ConfigKey): string => `Artisan.${key}`;

export const configAffected = (
    event: vscode.ConfigurationChangeEvent,
    ...keys: ConfigKey[]
): boolean => keys.some((key) => event.affectsConfiguration(configKey(key)));

export const updateConfig = (
    key: ConfigKey,
    value: any,
    configurationTarget?: vscode.ConfigurationTarget | boolean | null,
) => {
    return vscode.workspace
        .getConfiguration("Artisan")
        .update(key, value, configurationTarget);
};
