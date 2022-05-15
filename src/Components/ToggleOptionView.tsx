import { useDispatch, useSelector } from 'react-redux';
import { select } from '../app/SelectSlice';
import { RootState } from '../app/store';
import { Row } from '../Types/Row';
import { ToggleOption } from '../Types/ToggleOption';
import * as CSS from 'csstype';

function ToggleOptionView(props: { row: Row, option: ToggleOption, widthRatio: number, isLocked: boolean }) {

    const activeResponsesIds = useSelector((state: RootState) => Object.values(state.select.activeResponses));
    const dispatch = useDispatch();

    const isSelected = (id: string) : boolean => {
        for (let activeResponseId of activeResponsesIds) {
            if (activeResponseId === id) {
                return true;
            }
        }
        return false;
    }

    let optionClassName = "option";
    if (isSelected(props.option.id)) {
        optionClassName += " active";
    }
    let optionCss: CSS.Properties = {
        width: `${props.widthRatio*100}%`
    };

    let payload = {
        rowId: props.row.id,
        optionId: props.option.id
    }

    let clickHandler = () => dispatch(select(payload));

    // Clicking options does nothing if the question is locked (all active responses are correct)
    return (
        <div className={optionClassName} style={optionCss} onClick={!props.isLocked ? clickHandler : undefined}>
            { props.option.label }
        </div>
    );
}

export default ToggleOptionView;
