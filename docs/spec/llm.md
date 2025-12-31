# LLM & Cronjobs Specification

## Role
The "Factory". Runs periodically to generate new content.

## Workflow
1.  **Configuration:** Read configuration/topics.
2.  **Prompts:** Pull prompts from `/prompts` (JSON content accepted by LLM API).
3.  **Generation:** Call LLM APIs (Gemini/OpenAI).
4.  **Validation:** Validate JSON output.
5.  **Storage:** Insert into Backend Database.

## Tech Stack
- [Likely Python or TypeScript - To be determined]

## Data Structures

### Vocabulary Question Type
```ts
type question =
{
    type: 'vocab' | 'grammar' | 'reading',
    text: string, 
    answers:
    {
        correct: boolean,
        text: string,
        explanation: string
    }[]
}
```
