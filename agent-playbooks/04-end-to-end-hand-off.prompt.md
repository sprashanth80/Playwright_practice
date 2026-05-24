# End-to-End Hand-off Prompt (3-Agent Flow)

Use this with your current agent to orchestrate hand-off across modes.

Prompt:
We will follow a 3-agent pipeline for this feature:
1) Test Case Agent
2) Script Agent
3) Healer Agent

Global rule:
Create new files only. Do not edit existing scripted files.

Step 1 output required:
- Scenario catalog
- Data matrix
- Priority tags

Step 2 output required:
- New Playwright draft specs under tests/experimental/
- New data files under test_data/experimental/
- Run command for new drafts only

Step 3 output required:
- Failure triage report
- Root cause and fix proposal
- Stabilization notes and rerun checklist

MCP usage guidance:
- Use filesystem MCP for logs/traces/report artifacts.
- Use Playwright MCP for selector and UI behavior validation.

Completion criteria:
- Artifacts created in new files only
- At least one runnable draft test generated
- Debug checklist provided for first failure iteration
