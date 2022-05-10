import { Question } from '../Types/Question';
import AnswerView from './AnswerView';

function QuestionView(props: { question: Question, isLocked: boolean }) {
    return (
        <>
            <h2>{props.question.questionText}</h2>
            <AnswerView answer={props.question.answer} isLocked={props.isLocked} />
        </>
    );
}

export default QuestionView;
