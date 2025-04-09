import allQuestions from '../../public/questions.json';

export default function generateQuestions(selections){
    const {position, department, tenure, reason} = selections;

    const filteredQuestions = allQuestions.filter(question =>
        question.roles.includes(position) &&
        question.departments.includes(department) &&
        question.tenure.includes(tenure) &&
        question.reasons.includes(reason)
    )

    const randomQuestions = [...filteredQuestions].sort(() => 0.5 - Math.random()).slice(0,4);
    return randomQuestions;

}