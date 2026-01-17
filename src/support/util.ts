import os from "os";

export const escapeNamespace = (namespace: string): string => {
    if (
        ["linux", "openbsd", "sunos", "darwin"].some((unixPlatforms) =>
            os.platform().includes(unixPlatforms),
        )
    ) {
        // We need to escape backslashes because finally it will be a part of CLI command
        return namespace.replace(/(?<!\\)\\(?!\\)/g, "\\\\");
    }

    return namespace;
}