# Planner -> Generator -> Healer Orchestration Prompt

Use this prompt to enforce a consistent 3-agent hand-off.

Prompt:
We will execute a 3-agent flow:
1) Planner
2) Generator
3) Healer

Global rule:
Create new files only. Do not edit existing scripted files.

Planner deliverables:
- Scenario catalog with stable IDs
- Data matrix
- Priority tags

Generator deliverables:
- New draft specs under tests/experimental/
- Optional new data files under test_data/experimental/
- Command to run only new draft tests

Healer deliverables:
- Failure triage with root cause
- Preferred minimal fix and fallback fix
- Stabilization/rerun checklist

MCP tool usage:
- Filesystem MCP for artifacts/logs inspection
- Playwright MCP for UI/locator validation

Completion conditions:
- New files only
- At least one runnable draft spec
- Actionable debug plan for first failure cycle
