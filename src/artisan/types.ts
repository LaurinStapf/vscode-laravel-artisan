export type Command = RunCommand | MakeCommand | TableCommand;

export interface BaseCommand {
    name: string;
    type?: CommandType | undefined;
    arguments?: Argument[];
    options?: Option[];
}

export interface RunCommand extends BaseCommand {
    type?: "run";
}

export interface MakeCommand extends BaseCommand {
    type?: "make";
}

export interface TableCommand extends BaseCommand {
    type?: "table";
    config: TableConfig;
}

export type CommandType = "run" | "make" | "table";

export interface Option {
    name: string;
    type?: OptionType | undefined;
    options?: () => Record<string, string>;
    default?: ((...args: string[]) => string) | string;
    description?: string;
    allowSpaces?: boolean;
    excludeIf?: string[];
}

export type OptionType = "select" | "input";

export interface Argument {
    name: string;
    type?: ArgumentType | undefined;
    description?: string;
    allowSpaces?: boolean;
    isOptional?: boolean;
}

export type ArgumentType = "namespaceOrPath" | "namespace" | "path" | "input";

export interface TableConfig {
    parseMode: ParseType;
    successMessage?: string;
}

export type ParseType = "cli" | "json";