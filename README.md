# GovLingual

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
