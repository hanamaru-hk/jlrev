import { query } from '@repo/shared';

/**
 * Interface representing the question structure as per docs/spec/cronjobs.md
 */
interface IQuestion {
    type: 'vocab' | 'grammar' | 'reading';
    part: number;
    text: string;
    answers: {
        correct: boolean;
        text: string;
        explanation: string;
    }[];
}

async function runCronjob() {
    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

    if (!OPENROUTER_API_KEY) {
        console.error("Error: OPENROUTER_API_KEY is not defined in .env file.");
        process.exit(1);
    }

    console.log("Starting question generation cronjob...");

    try {
        // 1. Ensure Table Exists (as per spec)
        await query(`
            CREATE TABLE IF NOT EXISTS questions (
                id SERIAL PRIMARY KEY,
                type VARCHAR(50) NOT NULL,
                part INT NOT NULL,
                text TEXT NOT NULL,
                answers JSONB NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log("Verified database table 'questions' exists.");

        // 2. Prepare Prompt (Simple placeholder based on spec 'Prompts: Pull prompts from /prompts')
        // In a real implementation, this would read from a file or configuration.
        const systemPrompt = `You are a Japanese language teacher creating JLPT N5 vocabulary questions.
Output ONLY a raw JSON array of objects. Do not include markdown formatting (like \`\`\`json).
Each object must follow this structure:
{
  "type": "vocab",
  "part": 1,
  "text": "Question text here (e.g. kanji reading or meaning)",
  "answers": [
    { "correct": true, "text": "Correct Answer", "explanation": "Why this is correct" },
    { "correct": false, "text": "Wrong Answer 1", "explanation": "Why this is wrong" },
    { "correct": false, "text": "Wrong Answer 2", "explanation": "Why this is wrong" },
    { "correct": false, "text": "Wrong Answer 3", "explanation": "Why this is wrong" }
  ]
}`;

        const userPrompt = "Generate 3 vocabulary questions for JLPT N5.";

        console.log("Connecting to OpenRouter API...");

        // 3. Call OpenRouter API
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://jlrev.com", // Optional, for OpenRouter rankings
                "X-Title": "JLRev Question Generator" // Optional
            },
            body: JSON.stringify({
                model: "openai/gpt-3.5-turbo", // Use a cost-effective model
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userPrompt }
                ],
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`OpenRouter API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const content = data.choices[0]?.message?.content;

        if (!content) {
            throw new Error("No content received from OpenRouter.");
        }

        // 4. Parse Response
        let questions: IQuestion[];
        try {
            // Attempt to parse JSON directly
            // Clean up potential markdown code blocks if the LLM adds them despite instructions
            const cleanedContent = content.replace(/```json/g, '').replace(/```/g, '').trim();
            questions = JSON.parse(cleanedContent);
        } catch (e) {
            console.error("Failed to parse JSON from LLM response:", content);
            throw e;
        }

        console.log(`Generated ${questions.length} questions. Storing to database...`);

        // 5. Store in Database
        for (const q of questions) {
            // Basic validation
            if (!q.text || !q.answers || !Array.isArray(q.answers)) {
                console.warn("Skipping invalid question format:", q);
                continue;
            }

            await query(
                'INSERT INTO questions (type, part, text, answers) VALUES ($1, $2, $3, $4)',
                [q.type, q.part, q.text, JSON.stringify(q.answers)]
            );
        }

        console.log("Successfully stored questions in the database.");
        process.exit(0);
    } catch (error) {
        console.error("Cronjob failed:", error);
        process.exit(1);
    }
}

// Run the function
runCronjob();
