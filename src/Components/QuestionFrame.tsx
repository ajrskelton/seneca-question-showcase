import React, { useState } from 'react';
import QuestionView from './QuestionView';
import questionData from '../Data/QuestionData';

function QuestionFrame() {
    const [activeIndex, setActiveIndex] = useState(0);

    let isFirstQuestion = activeIndex === 0;
    let previousQuestionMarkup = isFirstQuestion
        ? null
        : (
        <button className="pull-left" onClick={() => setActiveIndex(activeIndex - 1)}>
            &lt; Previous Question
        </button>
    );

    let isLastQuestion = activeIndex === questionData.length - 1;
    let nextQuestionMarkup = isLastQuestion
        ? null
        : (
        <button className="pull-right" onClick={() => setActiveIndex(activeIndex + 1)}>
            Next Question &gt;
        </button>
    );

    return (
        <div>
            <div className="DisplayPanel">
                <QuestionView question={questionData[activeIndex]} />
            </div>
            <div className="NavigationPanel">
                {previousQuestionMarkup}
                {nextQuestionMarkup}
            </div>
        </div>
    );
}

export default QuestionFrame;
