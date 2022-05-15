import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Row } from '../Types/Row';
import { ToggleOption } from '../Types/ToggleOption';
import { shuffle } from '../util/helpers';
import ToggleOptionView from './ToggleOptionView';
import * as CSS from 'csstype';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

function AnswerRowView(props: { row: Row, isLocked: boolean }) {

    const rowRef = useRef<HTMLDivElement>(null);
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    const activeResponses: any = useSelector((state: RootState) => state.select.activeResponses);

    const [rect, setRect] = useState({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        height: 0,
        width: 0
    });

    
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener(`resize-${props.row.id}`, handleResize);
        handleResize();
        return () => window.removeEventListener(`resize-${props.row.id}`, handleResize);
    }, [windowSize]);

    const measuredRef = useCallback((node: any) => {
        if (node !== null) {
            let clientRect = node.getBoundingClientRect()
            setRect({
                top: Math.round(clientRect.top),
                right: Math.round(clientRect.right),
                bottom: Math.round(clientRect.bottom),
                left: Math.round(clientRect.left),
                width: Math.round(clientRect.width),
                height: Math.round(clientRect.height)
            });
        }
    }, [windowSize]);

    let sizePercentage = 0;
    if (props.row.options.length === 3) {
        sizePercentage = 0.33333;
    } else {
        sizePercentage = 0.50;
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
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        height: `${rect.height}px`,
        background: 'rgba(255,255,255,0.4)',
        width: `${rect.width*sizePercentage}px`,
        transform: `translate(${index*rect.width*sizePercentage}px)`,
        borderRadius: '100px'
    };

    return (
        <>
            <div className="flex-row row" ref={measuredRef}>
                <div className="highlight" style={highlightCss}>&nbsp;</div>
                {props.row.options.map((option, i) => {
                    return (<ToggleOptionView key={option.id} row={props.row} option={option} isLocked={props.isLocked} />) 
                })}
            </div>
        </>
    );
}

export default AnswerRowView;
