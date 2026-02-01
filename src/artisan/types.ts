export interface Command {
    name: string;
    arguments?: Argument[];
    options?: Option[];
}

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
}

export type ArgumentType = "namespaceOrPath" | "namespace" | "path" | "input";
