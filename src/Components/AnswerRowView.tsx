import React, { useState } from 'react';
import { Row } from '../Types/Row';
import ToggleOptionView from './ToggleOptionView';

function AnswerRowView(props: { row: Row }) {

    return (
        <div className="flex-row row">
            {props.row.options.map((option, i) => {
                return (<ToggleOptionView key={option.id} option={option} />) 
            })}
        </div>
    );
}

export default AnswerRowView;
