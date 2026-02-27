import { Command, TableCommand } from "../types";

/**
 * `route:list` is called with `--json` appended automatically so the output
 * can be parsed with `parseRouteListJson`.
 */
export const RouteListCommand: TableCommand = {
    name: "route:list --json",
    type: "table",
    table: {
        title: "Routes",
    },
};
