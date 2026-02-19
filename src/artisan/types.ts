export interface Command {
    name: string;
    type?: CommandType | undefined;
    arguments?: Argument[];
    options?: Option[];
}

export type CommandType = "make" | "run";

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
