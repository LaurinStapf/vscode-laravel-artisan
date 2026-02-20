# Contributing

To get the extension running locally:

```
git clone https://github.com/LaurinStapf/vscode-laravel-artisan.git
cd vscode-laravel-artisan
npm install
```

-   Open the project in VS Code
-   Open the command palette and search for "Debug: Start Debugging"
-   A new VS Code window will open, you'll see "[Extension Development Host]" in the title
-   Open any folder you'd like to test against
-   Press `⌘ + R` to reload the Extension Development Host project and see changes

## Of Note

-   `console.log` will appear in your main VS Code "Debug Console" tab, _not_ the Extension Development Host window
-   `info`, `error`, etc from `src/support/logger.ts` will show up in the "Output" tab (make sure to select "Laravel Artisan" from the list) of your Extension Development Host window