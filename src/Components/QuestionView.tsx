import React, { useState } from 'react';
import { Question } from '../Types/Question';
import AnswerView from './AnswerView';

function QuestionView(props: { question: Question }) {
    return (
        <div>
            <h2>{props.question.questionText}</h2>
            <AnswerView answer={props.question.answer} />
        </div>
    );
}

export default QuestionView;
