import { Question } from "../Types/Question";

const countCorrectAnswers = (question: Question, activeResponses: any) => {
    let correctAnswersCount = 0;
    const rowsWithResponses = Object.keys(activeResponses);
    for (let answerRow of question.answer.rows) {
        if (rowsWithResponses.includes(answerRow.id)) {
            const responseId = activeResponses[answerRow.id];
            const isCorrect = answerRow.options.find(x => x.id === responseId)?.isCorrect;
            if (isCorrect) {
                correctAnswersCount++;
            }
        }
    }
    return correctAnswersCount;
};

const checkLocked = (question: Question, activeResponses: any) => {
    const totalAnswers = question.answer.rows.length;
    return (totalAnswers === countCorrectAnswers(question, activeResponses));
};

const shuffle = (array: Array<any>) => {
    const indexes = [];
    const shuffled = [];
    for (let i = 0; i < array.length; i++) {
        indexes.push(i);
    }
    for (let i = 0; i < indexes.length; i++) {
        const a = Math.floor(Math.random() * indexes.length);
        const b = Math.floor(Math.random() * indexes.length);
        let temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }
    for (let i = 0; i < array.length; i++) {
        shuffled.push(array[indexes[i]]);
    }
    return shuffled;
};

export { checkLocked, countCorrectAnswers, shuffle };
