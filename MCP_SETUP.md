# MCP Setup for TypeScript_Practice

This workspace is configured with two MCP servers in `.vscode/mcp.json`:

- `filesystem`: safe file operations limited to this workspace
- `playwright`: browser automation and page-level test actions

## 1) Verify servers are available in VS Code

1. Open this workspace in VS Code.
2. Open Command Palette and run: `MCP: List Servers`.
3. Confirm both `filesystem` and `playwright` are listed as running (or startable).

## 2) Use MCP with agents (including Healer)

In Copilot Chat, pick your agent (for example **Healer**) and prompt it with MCP-focused tasks:

- "Use MCP filesystem tools to find flaky Playwright tests and patch the top 2 failures."
- "Use MCP Playwright to open the app and validate login flow selectors."
- "Use MCP filesystem + Playwright and produce a fix plus rerun guidance."

If your chosen agent supports tool usage, it can call the configured MCP servers from this workspace.

## 3) Optional: Run servers manually from terminal

- `npm run mcp:filesystem`
- `npm run mcp:playwright`

These scripts are useful for debugging MCP server startup logs.

## Notes

- The filesystem server is scoped to `${workspaceFolder}` to avoid operating outside this repo.
- Playwright MCP server uses the latest published package via `npx`.
