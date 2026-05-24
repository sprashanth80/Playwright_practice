# MCP Smoke Test Prompt (Planner / Generator / Healer)

Purpose:
Quickly verify MCP tools are accessible in your current VS Code + Copilot environment.

Global rule:
Create new files only. Do not edit existing scripted files.

Prompt to paste in Copilot Chat:

Run an MCP smoke test for this workspace using available tools.

Checks to perform:
1. Filesystem tool check:
   - List top-level files/folders in the workspace.
   - Read the first 20 lines of MCP setup documentation.
   - Confirm tests/experimental and test_data/experimental folders exist.

2. Playwright tool check:
   - Open https://example.com.
   - Report page title.
   - Capture one screenshot and report where it was saved.

3. Agent hand-off readiness:
   - Confirm whether this session can run Planner -> Generator -> Healer with MCP tools.
   - If any MCP capability is unavailable, provide exact remediation steps.

Output format:
1. MCP availability summary (filesystem/playwright)
2. Evidence of successful tool calls
3. Any blocker + fix steps
4. Final status: READY or NOT READY

Expected success signal:
- Tools were invoked with evidence.
- Final status is READY.
