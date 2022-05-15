import { useEffect, useState } from 'react';
import { Row } from '../Types/Row';
import { ToggleOption } from '../Types/ToggleOption';
import { shuffle } from '../util/helpers';
import ToggleOptionView from './ToggleOptionView';
import * as CSS from 'csstype';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

function AnswerRowView(props: { row: Row, isLocked: boolean }) {

    const activeResponses: any = useSelector((state: RootState) => state.select.activeResponses);

    let sizePercentage = 0;
    if (props.row.options.length === 3) {
        sizePercentage = 33;
    } else {
        sizePercentage = 50;
    }

    let index = 0;
    for (let i = 0; i < props.row.options.length; i++) {
        let option = props.row.options[i];
        if (option.id === activeResponses[props.row.id]) {
            index = i;
        }
    }
    let highlightCss: CSS.Properties = {
        position: 'absolute',
        top: '0',
        left: '0',
        background: 'rgba(255,255,255,0.8)',
        width: `${sizePercentage}%`,
        transform: `translate(${index*sizePercentage}%)`
    };

    return (
        <>
            <div className="flex-row row">
                <div style={highlightCss}>&nbsp;</div>
                {props.row.options.map((option, i) => {
                    return (<ToggleOptionView key={option.id} row={props.row} option={option} isLocked={props.isLocked} />) 
                })}
            </div>
        </>
    );
}

export default AnswerRowView;
