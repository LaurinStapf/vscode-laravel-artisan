import { config } from "./config";

type PhpEnvironmentConfig = {
    label: string;
    description?: string;
    check?: string | string[];
    command?: string;
    test?: (output: string) => boolean;
    relativePath?: boolean;
};

export type PhpEnvironment = "auto" | "herd" | "docker" | "local";

export const phpEnvironments: Record<PhpEnvironment, PhpEnvironmentConfig> = {
    auto: {
        label: "Auto Detect",
        description: "Auto detect the local PHP environment.",
    },
    herd: {
        label: "Herd",
        description: "Auto detect PHP version Herd is using for the project.",
        check: "herd which-php",
        command: '"{binaryPath}"',
        test: (output) => !output.includes("No usable PHP version found"),
    },
    local: {
        label: "Local",
        description: "Use PHP installed on the local machine.",
        check: 'php -r "echo PHP_BINARY;"',
        command: '"{binaryPath}"',
    },
    docker: {
        label: "Docker",
        check: "docker ps",
        test: () => config<string>("phpEnvironment", "") === "docker",
        command: config<string>("phpCommand", ""),
        relativePath: true,
    },
};

export const phpEnvironmentsThatUseRelativePaths: PhpEnvironment[] =
    Object.keys(phpEnvironments).filter(
        (key) => phpEnvironments[key as PhpEnvironment]?.relativePath,
    ) as PhpEnvironment[];
