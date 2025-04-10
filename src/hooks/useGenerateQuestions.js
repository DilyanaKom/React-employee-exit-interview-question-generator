import { useState, useEffect } from "react";
import { getRandomQuestions } from "../utils/randomQuestionGenerator";
import { filterQuestions } from "../utils/questionFilter";

export const useGenerateQuestions = (selections) => {
    const [filtered, setFiltered] = useState([]);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const filteredQuestions = filterQuestions(selections);
        console.log(filteredQuestions)
        setFiltered(filteredQuestions);
        setQuestions(getRandomQuestions(filteredQuestions));
    }, [selections]);

    const regenerate = () => {
        setQuestions(getRandomQuestions(filtered));
    };

    return {
        questions,
        regenerate
    }
}