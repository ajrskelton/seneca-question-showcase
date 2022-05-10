import { useDispatch, useSelector } from 'react-redux';
import { prev, next } from '../app/QuestionSlice';
import QuestionView from './QuestionView';
import questionData from '../Data/QuestionData';
import { RootState } from '../app/store';

function QuestionFrame() {
    const activeIndex = useSelector((state: RootState) => state.question.activeIndex);
    const selectedOptions: any = useSelector((state: RootState) => state.select.selectedOptions);
    const dispatch = useDispatch();

    const maxCorrectnessLevel = 4;
    
    let isFirstQuestion = activeIndex === 0;
    let previousQuestionMarkup = (
        <button className="start-justify" onClick={() => dispatch(prev())}>
            &lt; Previous Question
        </button>
    );
    if (isFirstQuestion) {
        previousQuestionMarkup = (
        <button className="start-justify" disabled>
            &lt; Previous Question
        </button>
        );
    }

    let isLastQuestion = activeIndex === questionData.length - 1;
    let nextQuestionMarkup = (
        <button className="end-justify" onClick={() => dispatch(next())}>
            Next Question &gt;
        </button>
    );
    if (isLastQuestion) {
        nextQuestionMarkup = (
        <button className="end-justify" disabled>
            Next Question &gt;
        </button>
        );
    }

    const activeQuestion = questionData[activeIndex];
    const rowsWithResponses = Object.keys(selectedOptions);

    let correctAnswers = 0;
    let totalAnswers = activeQuestion.answer.rows.length;
    
    for (let answerRow of activeQuestion.answer.rows) {
        if (rowsWithResponses.includes(answerRow.id)) {
            let responseId = selectedOptions[answerRow.id];
            let isCorrect = answerRow.options.find(x => x.id === responseId)?.isCorrect;
            if (isCorrect) {
                correctAnswers++;
            }
        }
    }
    let isLocked = correctAnswers === totalAnswers;
    let correctnessLevel = Math.round(correctAnswers / totalAnswers * maxCorrectnessLevel);
    let pageClass = `page correct-${correctnessLevel}`;

    return (
        <div className={pageClass}>
            <div className="frame">
                <div className="display-panel flex-column">
                    <QuestionView question={activeQuestion} isLocked={isLocked} />
                </div>
                <div className="navigation-panel flex-row">
                    {previousQuestionMarkup}
                    {nextQuestionMarkup}
                </div>
            </div>
        </div>
    );
}

export default QuestionFrame;
