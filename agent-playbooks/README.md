# Agent Playbooks (Non-Intrusive)

This folder is intentionally isolated for experimentation.
No existing scripted files were modified.

Use these prompts in Copilot Chat by selecting the corresponding agent mode.

## Included playbooks

1. 01-test-case-agent.prompt.md
2. 02-script-agent.prompt.md
3. 03-healer-agent.prompt.md
4. 04-end-to-end-hand-off.prompt.md

## Suggested flow

1. Run 01 to generate scenarios and data matrix.
2. Run 02 to generate Playwright code into new draft files only.
3. Execute tests.
4. Run 03 on failures for healing and stabilization.
5. Use 04 if you want one agent to orchestrate hand-off instructions between modes.

## Important safety rule

Always include this line in your prompt when experimenting:
Create new files only. Do not edit existing test scripts.
