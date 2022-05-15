import { useCallback, useEffect, useState } from 'react';
import { Row } from '../Types/Row';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import ToggleOptionView from './ToggleOptionView';
import * as CSS from 'csstype';

function AnswerRowView(props: { row: Row, isLocked: boolean }) {

    /*
        This answer row controls the logic to highlight the active responses (current selections)
        This is done by creating semi-transparent, absolutly positioned div with a to overlap the active option
        The highlight calculates its own size and position whenever the screen is resized to stay accurate
        Transforming the position of the highlight via a translation allows a CSS animation to "slide" the highlight
    */

    const activeResponses: any = useSelector((state: RootState) => state.select.activeResponses);
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    const [rect, setRect] = useState({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        height: 0,
        width: 0
    });
    
    // This use effect sets the width and height of the window on resize
    // While these values don't get used, the change triggers the measuredRef callback below
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener(`resize-${props.row.id}`, handleResize);
        handleResize();
        return () => window.removeEventListener(`resize-${props.row.id}`, handleResize);
    }, [windowSize, props.row.id]);

    // The rect below hold the value of the bounding rectangle of this row
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

    let widthRatio = 0;
    if (props.row.options.length === 3) {
        widthRatio = 0.33333;
    } else {
        widthRatio = 0.50;
    }

    // This index is used to determine how far the highlight should be offset to the right
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
        width: `${rect.width*widthRatio}px`,
        transform: `translate(${index*rect.width*widthRatio}px)`,
        borderRadius: '100px'
    };

    return (
        <>
            <div className="flex-row row" ref={measuredRef}>
                <div className="highlight" style={highlightCss}>&nbsp;</div>
                {props.row.options.map((option, i) => {
                    return (
                        <ToggleOptionView key={option.id} row={props.row} option={option} widthRatio={widthRatio} isLocked={props.isLocked} />
                    );
                })}
            </div>
        </>
    );
}

export default AnswerRowView;
