export function getRandomQuestions(questions) {
    const randomQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, 4);
    return randomQuestions;
}

