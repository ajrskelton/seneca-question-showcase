import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Question } from '../Types/Question';
import { checkLocked, countCorrectAnswers } from '../util/helpers';
import AnswerView from './AnswerView';

function QuestionView(props: { children: React.ReactNode, question: Question, isVisible: boolean }) {
    
    const activeResponses: any = useSelector((state: RootState) => state.select.activeResponses);

    if (!props.isVisible) {
        return null;
    }

    const maxCorrectnessLevel = 4;

    // This CSS class determines the colours
    const getCardClass = (question: Question, activeResponses: any) => {
        let totalAnswersCount = question.answer.rows.length;
        let correctAnswersCount = countCorrectAnswers(question, activeResponses);
        let correctnessLevel = Math.round(correctAnswersCount / totalAnswersCount * maxCorrectnessLevel);
        return `card correct-${correctnessLevel}`;
    };
    
    let isLocked = checkLocked(props.question, activeResponses);
    let cardClass = getCardClass(props.question, activeResponses);
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
