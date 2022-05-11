import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Question } from '../Types/Question';
import AnswerView from './AnswerView';

function QuestionView(props: { children: React.ReactNode, question: Question, isVisible: boolean }) {
    
    const selectedOptions: any = useSelector((state: RootState) => state.select.selectedOptions);

    if (!props.isVisible) {
        return null;
    }

    const maxCorrectnessLevel = 4;

    const getCorrectAnswers = (question: Question, selectedOptions: any) => {
        let correctAnswers = 0;
        const rowsWithResponses = Object.keys(selectedOptions);
        for (let answerRow of question.answer.rows) {
            if (rowsWithResponses.includes(answerRow.id)) {
                let responseId = selectedOptions[answerRow.id];
                let isCorrect = answerRow.options.find(x => x.id === responseId)?.isCorrect;
                if (isCorrect) {
                    correctAnswers++;
                }
            }
        }
        return correctAnswers;
    };

    const checkLocked = (question: Question, selectedOptions: any) => {
        let totalAnswers = question.answer.rows.length;
        return (totalAnswers === getCorrectAnswers(question, selectedOptions));
    };

    const getCardClass = (question: Question, selectedOptions: any) => {
        let totalAnswers = question.answer.rows.length;
        let correctAnswers = getCorrectAnswers(question, selectedOptions);
        let correctnessLevel = Math.round(correctAnswers / totalAnswers * maxCorrectnessLevel);
        return `card correct-${correctnessLevel}`;
    };
    
    let isLocked = checkLocked(props.question, selectedOptions);
    let cardClass = getCardClass(props.question, selectedOptions);
    let infoCard = (
        <div className='card'>
            { props.children }
        </div>
    );
    
    return (
        <>
            <div className={cardClass}>
                <h2>{props.question.questionText}</h2>
                <AnswerView answer={props.question.answer} isLocked={isLocked} />
            </div>
            { isLocked ? infoCard : null }
        </>
    );
}

export default QuestionView;
