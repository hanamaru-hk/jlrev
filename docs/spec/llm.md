# LLM and Cronjob

## Generate a JSON format of questions / answer based on question type

- pretrain each question types with data.
- question type ( e.g. vocabulary, grammar, reading)

### Vocabulary

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