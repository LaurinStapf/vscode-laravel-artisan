# Laravel Artisan VS Code Extension

Run Laravel Artisan commands directly from within Visual Studio Code.

This extension is focused on improving your Laravel developer experience by providing quick access to Artisan commands - without leaving your editor.

> [!NOTE]
> This extension is forked from [**TheColorRed/vscode-laravel-artisan**](https://github.com/TheColorRed/vscode-laravel-artisan), with ongoing maintenance and improvements.

---

## Please Note

- This extension executes `php artisan` commands in your workspace
- It supports **multiple Laravel installations** within a single VS Code workspace
- The extension is designed to complement other Laravel or PHP intelligence extensions (e.g. Offical Laravel extension, PHP Intelephense)
- Docker and WSL environments are fully supported

---

## Supported Versions

- Laravel: Any version that includes the `artisan` CLI
- PHP: A CLI-capable PHP installation (Herd, Docker, WSL or local)

---

## Features

A non-exhaustive list of features provided by the extension:

### Artisan Command Execution

- Run **any default Artisan command** from VS Code
- Interactive prompts for command arguments & options

### Code Generation

- `make:*` commands for:
  - Controllers
  - Models
  - Migrations
  - Seeders
  - Requests
  - Middleware
  - and much more...

### Database

- Run, rollback, refresh, and reset migrations
- Seed the database

### Routing

- View all registered routes

### Maintenance

- Clear application caches
- Generate application keys
- Start / stop local PHP server

### Docker & WSL

- Run Artisan commands inside Docker containers
- Native support for WSL (newer and legacy versions)

---

## Usage

Open the Command Palette and type: Here are things todo ;)