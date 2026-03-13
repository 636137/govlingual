## Proprietary Notice

This code is proprietary to **Maximus**. **No public license is granted**. See [`NOTICE`](./NOTICE).

---

# GovLingual

## Repository Layout

- `frontend/`
- `backend/`
- `infra/`

## Local vs Deploy

- Local: see `docs/how-to.md`
- Deploy: see `infra/`


**Multilingual Government Services Framework**

## Background
Adobe's 2025 Digital Government Index evaluates all 50 state websites for language translation. OMB M-23-22 requires accessible, user-centered services. No dedicated open-source government translation pipeline exists—agencies build ad hoc solutions with inconsistent quality.

## Need
Millions of LEP (Limited English Proficiency) residents underserved by English-only services. Executive Order language access requirements + 21st Century IDEA Act create clear need for reusable multilingual framework.

## Solution
AI-assisted translation with human review workflows, government-specific glossary management, seamless USWDS integration. Supports static content translation and dynamic form/notification localization.

## Design
**Components:**
- Translation memory & glossary (consistent terminology)
- AI translation layer (confidence scoring, human review queues)
- Content API (serves localized versions by user preference)
- USWDS extensions (RTL language support)
- Notify.gov integration (multilingual SMS)

**Supported Languages:** Spanish, Chinese (Simplified/Traditional), Vietnamese, Korean, Russian, Arabic, Tagalog, French, Haitian Creole, Portuguese

**Tech Stack:** Python, Google Translate API/AWS Translate, React + USWDS, PostgreSQL

## Outcomes
- Expand digital service reach to LEP populations
- Improve equity in government service delivery
- Reduce in-person translation service demand

**Quick Start:**
```bash
git clone https://github.com/636137/govlingual.git
cd govlingual && npm install
npm run translate -- --source=en --target=es --input=content/
```

---
**Status**: Active Development | **Last Updated**: 2026-02-28

<!-- BEGIN COPILOT CUSTOM AGENTS -->
## GitHub Copilot Custom Agents (Maximus Internal)

This repository includes **GitHub Copilot custom agent profiles** under `.github/agents/` to speed up planning, documentation, and safe reviews.

### Included agents
- `implementation-planner` — Creates detailed implementation plans and technical specifications for this repository.
- `readme-creator` — Improves README and adjacent documentation without modifying production code.
- `security-auditor` — Performs a read-only security review (secrets risk, risky patterns) and recommends fixes.

### How to invoke

- **GitHub.com (Copilot coding agent):** select the agent from the agent dropdown (or assign it to an issue) after the `.agent.md` files are on the default branch.
- **GitHub Copilot CLI:** from the repo folder, run `/agent` and select one of the agents, or run:
  - `copilot --agent <agent-file-base-name> --prompt "<your prompt>"`
- **IDEs:** open Copilot Chat and choose the agent from the agents dropdown (supported IDEs), backed by the `.github/agents/*.agent.md` files.

References:
- Custom agents configuration: https://docs.github.com/en/copilot/reference/custom-agents-configuration
- Creating custom agents: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents
<!-- END COPILOT CUSTOM AGENTS -->
