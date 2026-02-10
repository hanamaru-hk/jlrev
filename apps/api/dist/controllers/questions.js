"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionBank = exports.getQuestionBanks = void 0;
const getQuestionBanks = async (req, res) => {
    try {
        // const result = await query('SELECT * FROM question_banks');
        // res.json(result.rows);
        res.json([
            { id: 1, title: "JLPT N5 Vocabulary", count: 100 },
            { id: 2, title: "JLPT N4 Grammar", count: 80 }
        ]);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getQuestionBanks = getQuestionBanks;
const getQuestionBank = async (req, res) => {
    try {
        const { id } = req.params;
        // const result = await query('SELECT * FROM question_banks WHERE id = $1', [id]);
        // if (result.rows.length === 0) {
        //     return res.status(404).json({ error: 'Question bank not found' });
        // }
        // res.json(result.rows[0]);
        res.json({
            id,
            title: `Question Bank ${id}`,
            questions: [
                { id: 1, question: "What is the capital of Japan?", options: ["Tokyo", "Kyoto", "Osaka"], answer: 0 },
                { id: 2, question: "What is 'Sushi'?", options: ["Fish", "Rice", "Meat"], answer: 1 }
            ]
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getQuestionBank = getQuestionBank;
