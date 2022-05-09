import React, { useState } from 'react';
import QuestionView from './QuestionView';
import questionData from '../Data/QuestionData';

function QuestionFrame() {
    const [activeIndex, setActiveIndex] = useState(0);

    let isFirstQuestion = activeIndex === 0;
    let previousQuestionMarkup = (
        <button className="start-justify" onClick={() => setActiveIndex(activeIndex - 1)}>
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
        <button className="end-justify" onClick={() => setActiveIndex(activeIndex + 1)}>
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

    return (
        <div className="page correct-0">
            <div className="frame">
                <div className="display-panel flex-column">
                    <QuestionView question={questionData[activeIndex]} />
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
