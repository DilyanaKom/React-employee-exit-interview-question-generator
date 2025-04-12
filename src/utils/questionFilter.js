import allQuestions from '../../public/questions.json';

export function filterQuestions(selections, questions = allQuestions) {
    const { position, department, tenure, reason } = selections;

    const filteredQuestions = questions.filter(question =>
        question.roles.includes(position) &&
        question.departments.includes(department) &&
        question.tenure.includes(tenure) &&
        question.reasons.includes(reason)
    )

    return filteredQuestions;

}