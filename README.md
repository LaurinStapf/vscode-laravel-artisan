<p align="center"><img src="/art/logo.png" alt="Laravel Artisan Logo"></p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=LaurinStapf.vscode-laravel-artisan-commands"><img src="https://img.shields.io/visual-studio-marketplace/d/LaurinStapf.vscode-laravel-artisan-commands?color=%234c1" alt="Total Downloads"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=LaurinStapf.vscode-laravel-artisan-commands"><img src="https://img.shields.io/visual-studio-marketplace/v/LaurinStapf.vscode-laravel-artisan-commands" alt="Latest Stable Version"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=LaurinStapf.vscode-laravel-artisan-commands"><img src="https://img.shields.io/github/license/LaurinStapf/vscode-laravel-artisan" alt="License"></a>
</p>

# Laravel Artisan VS Code Extension

Run Laravel Artisan commands directly inside Visual Studio Code.

This extension focuses on fast command execution and code generation workflows for Laravel projects, without switching to an external terminal.

> [!IMPORTANT]
> This extension is forked from [TheColorRed/vscode-laravel-artisan](https://github.com/TheColorRed/vscode-laravel-artisan) and continues with active maintenance and improvements.

## Please Note

- This extension executes `php artisan` commands in your current workspace.
- Interactive prompts are used for required arguments and optional flags/options.
- The extension can auto-detect your PHP runtime (`herd`, `local`, `docker`) or use a custom command template.
- It supports multi-root VS Code workspaces and resolves the active Laravel project automatically.
- This extension is focused on Laravel Artisan workflows (not general PHP language intelligence).

## Supported Versions

- Laravel: Any version with the `artisan` CLI available.
- PHP: CLI-capable PHP runtime (local, Herd, Docker, WSL-based setups).
- VS Code: `^1.89.0`.

## Features

A non-exhaustive list of currently included capabilities:


- Run Laravel Artisan commands via the VS Code Command Palette.
- Guided input flow for command arguments and options.
- Success and error feedback directly in VS Code.

### Make Commands (Code Generation)

- `make:cast`
- `make:channel`
- `make:class`
- `make:command`
- `make:component`
- `make:config`
- `make:controller`
- `make:enum`
- `make:event`
- `make:exception`
- `make:factory`
- `make:interface`
- `make:job`
- `make:job-middleware`
- `make:listener`
- `make:livewire`
- `make:mail`
- `make:middleware`
- `make:migration`
- `make:model`
- `make:notification`
- `make:observer`
- `make:policy`
- `make:provider`
- `make:request`
- `make:resource`
- `make:scope`
- `make:seeder`
- `make:test`
- `make:trait`
- `make:view`

### Database & Migrations

- `migrate`
- `migrate:fresh`
- `migrate:install`
- `migrate:refresh`
- `migrate:reset`
- `migrate:rollback`

### Cache, Routes & Optimization

- `cache:clear`
- `cache:table`
- `compiled:clear`
- `config:cache`
- `config:clear`
- `route:cache`
- `route:clear`
- `route:list`
- `view:cache`
- `view:clear`
- `optimize`

### App Lifecycle & Utilities

- `down`
- `up`
- `event:generate`
- `key:generate`
- `docs`

## Usage

1. Open a Laravel project in VS Code.
2. Open the Command Palette.
3. Search for `Artisan` and choose the command you want to run.
4. Fill in prompted arguments/options.
5. Review output in VS Code notifications (and output channel for errors/details).

## On the Roadmap

- (Re-)Add support for `serve` command.
- Support for user created commands.
- Integration with VS Code Task Provider API
- Improve handling for commands with table result like `migrate`.