import * as vscode from "vscode";

export interface TableData {
    headers: string[];
    rows: string[][];
}

const stripAnsi = (str: string): string =>
    str.replace(
        /[\u001b\u009b][[()#?]*(?:[0-9]{1,4}(?:[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
        "",
    );

export const parseJson = (json: string): TableData => {
    try {
        const clean = stripAnsi(json).trim();

        const parsed = JSON.parse(clean);

        const findArray = (
            value: unknown,
        ): Array<Record<string, unknown>> | null => {
            if (Array.isArray(value)) {
                if (value.length > 0 && typeof value[0] === "object") {
                    return value as Array<Record<string, unknown>>;
                }
                return null;
            }

            if (value && typeof value === "object") {
                for (const v of Object.values(value)) {
                    const found = findArray(v);
                    if (found) return found;
                }
            }

            return null;
        };

        const data = findArray(parsed);

        if (!data || data.length === 0) {
            return { headers: [], rows: [] };
        }

        const headers = Array.from(
            data.reduce((set, obj) => {
                Object.keys(obj).forEach((k) => set.add(k));
                return set;
            }, new Set<string>()),
        );

        const rows = data.map((obj) =>
            headers.map((header) => {
                const value = obj[header];

                if (Array.isArray(value)) {
                    return value.join(", ");
                }

                if (value === null || value === undefined) {
                    return "";
                }

                if (typeof value === "object") {
                    return JSON.stringify(value);
                }

                return String(value);
            }),
        );

        return { headers, rows };
    } catch (err) {
        return { headers: [], rows: [] };
    }
};

const escapeHtml = (str: string): string =>
    str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

const buildHtml = (title: string, { headers, rows }: TableData): string => {
    const headerHtml = headers
        .map(
            (h) =>
                `<th><span class="th-label">${escapeHtml(h)}</span><span class="sort-icon"></span></th>`,
        )
        .join("");

    const rowsHtml = rows
        .map(
            (row, rowIdx) =>
                `<tr data-idx="${rowIdx}">${row
                    .map((cell, colIdx) => {
                        return `<td data-col="${colIdx}">${escapeHtml(cell)}</td>`;
                    })
                    .join("")}</tr>`,
        )
        .join("");

    return `
    <!DOCTYPE html >
        <html lang="en" >
            <head>
            <meta charset="UTF-8" />
                <meta name="viewport" content = "width=device-width, initial-scale=1.0" />
                    <title>${escapeHtml(title)} </title>
                        <style>
                        *, *:: before, *::after { box - sizing: border - box; margin: 0; padding: 0; }

                body {
        padding: 16px 20px 32px;
        font - family: var(--vscode - font - family);
        font - size: var(--vscode - font - size);
        color: var(--vscode - foreground);
        background: var(--vscode - editor - background);
    }

                h1 {
        font - size: 1.15em;
        font - weight: 600;
        margin - bottom: 14px;
        color: var(--vscode - foreground);
    }

                .toolbar {
    display: flex;
    align - items: center;
    gap: 10px;
    margin - bottom: 12px;
    flex - wrap: wrap;
}

                .search - input {
    flex: 1;
    min - width: 180px;
    max - width: 420px;
    padding: 5px 9px;
    border: 1px solid var(--vscode - input - border, transparent);
    border - radius: 3px;
    background: var(--vscode - input - background);
    color: var(--vscode - input - foreground);
    font - family: var(--vscode - font - family);
    font - size: var(--vscode - font - size);
    outline: none;
}

                .search - input::placeholder { color: var(--vscode - input - placeholderForeground); }
                .search - input:focus { border - color: var(--vscode - focusBorder); }
                .search - input.invalid {
    border - color: var(--vscode - inputValidation - errorBorder, #f44);
    background: var(--vscode - inputValidation - errorBackground, rgba(255, 0, 0, .08));
}

                .row - count {
    font - size: 0.85em;
    color: var(--vscode - descriptionForeground);
    white - space: nowrap;
}

                .table - wrapper { overflow - x: auto; }

                table {
    border - collapse: collapse;
    width: 100 %;
    min - width: 300px;
}

                thead {
    position: sticky;
    top: 0;
    z - index: 2;
}

                th {
    text - align: left;
    padding: 7px 14px;
    background: var(--vscode - sideBarSectionHeader - background, var(--vscode - editor - lineHighlightBackground, rgba(128, 128, 128, .15)));
    color: var(--vscode - sideBarSectionHeader - foreground, var(--vscode - foreground));
    font - weight: 600;
    border - bottom: 2px solid var(--vscode - panel - border,var(--vscode - editorGroup - border, rgba(128, 128, 128, .35)));
    white - space: nowrap;
    cursor: pointer;
    user - select: none;
}
th:hover { background: var(--vscode - list - hoverBackground); }
th.th - label { display: inline; }
th.sort - icon { display: inline - block; margin - left: 5px; opacity: 0.55; font - size: 0.78em; }
th.sort - asc.sort - icon::after { content: "▲"; }
th.sort - desc.sort - icon::after { content: "▼"; }
th: not(.sort - asc): not(.sort - desc).sort - icon::after { content: "⇅"; }

                td {
    padding: 5px 14px;
    border - bottom: 1px solid var(--vscode - panel - border, var(--vscode - editorGroup - border, rgba(128, 128, 128, .2)));
    word -break: break-word;
    max - width: 380px;
}

                tbody tr: nth - child(even) td {
    background: var(--vscode - list - inactiveSelectionBackground, rgba(128, 128, 128, .07));
}
                tbody tr:hover td { background: var(--vscode - list - hoverBackground); }
tr.hidden { display: none; }

                .empty - state {
    text - align: center;
    padding: 36px 16px;
    color: var(--vscode - descriptionForeground);
    display: none;
}
</style>
    </head>
    < body >
    <h1>${escapeHtml(title)} </h1>
        <div div class="toolbar" >
            <input
                    class="search-input"
type = "text"
id = "search"
placeholder = "Filter… (RegExp supported)"
autocomplete = "off"
spellcheck = "false"
    />
    <span class="row-count" id = "row-count" > </span>
        </div>
        < div class="table-wrapper" >
            <table id="data-table" >
                <thead><tr>${headerHtml} </tr></thead >
                    <tbody id="table-body" > ${rowsHtml} </tbody>
                        </table>
                        <div div class="empty-state" id = "empty-state" > No matching rows </div>
                            </div>
                                <script>
                                (function () {
                                    const searchEl = document.getElementById('search');
                                    const tbody = document.getElementById('table-body');
                                    const rowCount = document.getElementById('row-count');
                                    const emptyEl = document.getElementById('empty-state');
                                    const allRows = Array.from(tbody.querySelectorAll('tr'));

                                    allRows.forEach((r, i) => { r.dataset.idx = String(i); });

                                    let sortCol = -1;
                                    let sortDir = 0; // 1=asc, -1=desc, 0=none

                                    function updateCount() {
                                        const visible = allRows.filter(r => !r.classList.contains('hidden')).length;
                                        rowCount.textContent = visible + ' / ' + allRows.length + ' rows';
                                        emptyEl.style.display = visible === 0 ? 'block' : 'none';
                                    }

                                    function filterRows() {
                                        const val = searchEl.value;
                                        searchEl.classList.remove('invalid');
                                        let re = null;
                                        if (val) {
                                            try { re = new RegExp(val, 'i'); }
                                            catch { searchEl.classList.add('invalid'); updateCount(); return; }
                                        }
                                        allRows.forEach(row => {
                                            row.classList.toggle('hidden', re !== null && !re.test(row.textContent));
                                        });
                                        updateCount();
                                    }

                                    searchEl.addEventListener('input', filterRows);

                                    document.querySelectorAll('th').forEach((th, colIdx) => {
                                        th.addEventListener('click', () => {
                                            document.querySelectorAll('th').forEach(h => h.classList.remove('sort-asc', 'sort-desc'));

                                            if (sortCol === colIdx) {
                                                sortDir = sortDir === 1 ? -1 : sortDir === -1 ? 0 : 1;
                                            } else {
                                                sortCol = colIdx;
                                                sortDir = 1;
                                            }

                                            if (sortDir === 0) {
                                                sortCol = -1;
                                                // Restore original order
                                                allRows
                                                    .slice()
                                                    .sort((a, b) => Number(a.dataset.idx) - Number(b.dataset.idx))
                                                    .forEach(r => tbody.appendChild(r));
                                                updateCount();
                                                return;
                                            }

                                            th.classList.add(sortDir === 1 ? 'sort-asc' : 'sort-desc');

                                            Array.from(tbody.querySelectorAll('tr'))
                                                .sort((a, b) => {
                                                    const av = a.querySelectorAll('td')[colIdx]?.textContent?.trim() ?? '';
                                                    const bv = b.querySelectorAll('td')[colIdx]?.textContent?.trim() ?? '';
                                                    return av.localeCompare(bv, undefined, { numeric: true }) * sortDir;
                                                })
                                                .forEach(r => tbody.appendChild(r));

                                            updateCount();
                                        });
                                    });

                                    updateCount();
                                    searchEl.focus();
                                })();
</script>
    </body>
    </html>`;
};

const openPanels = new Map<string, vscode.WebviewPanel>();

export const openTableWebview = (
    viewId: string,
    title: string,
    data: TableData,
): vscode.WebviewPanel => {
    const existing = openPanels.get(viewId);
    if (existing) {
        existing.webview.html = buildHtml(title, data);
        existing.reveal(vscode.ViewColumn.Active, false);
        return existing;
    }

    const panel = vscode.window.createWebviewPanel(
        viewId,
        title,
        vscode.ViewColumn.Active,
        { enableScripts: true, retainContextWhenHidden: true },
    );

    panel.webview.html = buildHtml(title, data);
    openPanels.set(viewId, panel);
    panel.onDidDispose(() => openPanels.delete(viewId));

    return panel;
};
