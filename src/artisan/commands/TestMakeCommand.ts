import { Command, MakeCommand } from "../types";

export const TestMakeCommand: MakeCommand = {
    name: "make:test",
    arguments: [
        {
            name: "name",
            type: "namespace",
            description: "The name of the test",
        },
    ],
    options: [
        {
            name: "--unit",
            description: "Create a unit test",
        },
        {
            name: "--pest",
            description: "Create a Pest test",
            excludeIf: ["--phpunit"],
        },
        {
            name: "--phpunit",
            description: "Create a PHPUnit test",
            excludeIf: ["--pest"],
        },
    ],
};
