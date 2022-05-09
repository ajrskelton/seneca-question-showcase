import { useDispatch, useSelector } from 'react-redux';
import { select } from '../app/SelectSlice';
import { RootState } from '../app/store';
import { Row } from '../Types/Row';
import { ToggleOption } from '../Types/ToggleOption';

function ToggleOptionView(props: { row: Row, option: ToggleOption }) {

    const selectedOptionIds = useSelector((state: RootState) => Object.values(state.select.selectedOptions))
    const dispatch = useDispatch()

    const isSelected = (id: string) : boolean => {
        for (let selectedOptionId of selectedOptionIds) {
            if (selectedOptionId === id) {
                return true;
            }
        }
        return false;
    }

    let optionClassName = "option";
    if (props.row.options.length === 3) {
        optionClassName += " third-width";
    } else {
        optionClassName += " half-width";
    }
    if (isSelected(props.option.id)) {
        optionClassName += " active";
    }

    let payload = {
        rowId: props.row.id,
        optionId: props.option.id
    }

    return (
        <div className={optionClassName} onClick={() => dispatch(select(payload))}>
            { props.option.label }
        </div>
    );
}

export default ToggleOptionView;
