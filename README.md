<p align="center"><img src="/art/logo.svg" alt="Laravel Artisan Logo" style="max-width: 35%"></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=LaurinStapf.vscode-laravel-artisan-commands"><img src="https://img.shields.io/visual-studio-marketplace/d/LaurinStapf.vscode-laravel-artisan-commands?color=%234c1" alt="Total Downloads"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=LaurinStapf.vscode-laravel-artisan-commands"><img src="https://img.shields.io/visual-studio-marketplace/v/LaurinStapf.vscode-laravel-artisan-commands" alt="Latest Stable Version"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=LaurinStapf.vscode-laravel-artisan-commands"><img src="https://img.shields.io/github/license/LaurinStapf/vscode-laravel-artisan" alt="License"></a>
</p>

# Laravel Artisan VS Code Extension

Run Laravel Artisan commands directly from within Visual Studio Code.

This extension is focused on improving your Laravel developer experience by providing quick access to Artisan commands - without leaving your editor.

> [!IMPORTANT]
> This extension is forked from [**TheColorRed/vscode-laravel-artisan**](https://github.com/TheColorRed/vscode-laravel-artisan), with ongoing maintenance and improvements.

## Please Note

- This extension executes `php artisan` commands in your workspace
- It supports **multiple Laravel installations** within a single VS Code workspace
- The extension is designed to complement other Laravel or PHP intelligence extensions
  (e.g. Offical Laravel extension, PHP Intelephense)
- Docker and WSL environments are supported

## Supported Versions

- Laravel: Any version that includes the `artisan` CLI
- PHP: A CLI-capable PHP installation (Herd, Docker, WSL or local)

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

## Usage

Open the Command Palette and type: Here are things todo ;)