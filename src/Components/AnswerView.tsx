import React, { useState } from 'react';
import { Answer } from '../Types/Answer';
import AnswerRowView from './AnswerRowView';

function AnswerView(props: { answer: Answer }) {

    return (
        <div>
            {props.answer.rows.map((row, i) => {
                return (<AnswerRowView key={row.id} row={row} />) 
            })}
        </div>
    );
}

export default AnswerView;
