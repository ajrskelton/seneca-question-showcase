import React, { useState } from 'react';
import { Question } from '../Types/Question';
import AnswerView from './AnswerView';

function QuestionView(props: { question: Question }) {
    return (
        <>
            <h2>{props.question.questionText}</h2>
            <AnswerView answer={props.question.answer} />
        </>
    );
}

export default QuestionView;
