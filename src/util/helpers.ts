import { Question } from "../Types/Question";

const countCorrectAnswers = (question: Question, activeResponses: any) => {
    let correctAnswersCount = 0;
    const rowsWithResponses = Object.keys(activeResponses);
    for (let answerRow of question.answer.rows) {
        if (rowsWithResponses.includes(answerRow.id)) {
            let responseId = activeResponses[answerRow.id];
            let isCorrect = answerRow.options.find(x => x.id === responseId)?.isCorrect;
            if (isCorrect) {
                correctAnswersCount++;
            }
        }
    }
    return correctAnswersCount;
};

const checkLocked = (question: Question, activeResponses: any) => {
    let totalAnswers = question.answer.rows.length;
    return (totalAnswers === countCorrectAnswers(question, activeResponses));
};

const shuffle = (array: Array<any>) => {
    let indexes = [];
    let shuffled = [];
    for (let i = 0; i < array.length; i++) {
        indexes.push(i);
    }
    for (let i = 0; i < indexes.length; i++) {
        let a = Math.floor(Math.random() * indexes.length);
        let b = Math.floor(Math.random() * indexes.length);
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
