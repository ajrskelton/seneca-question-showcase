import { Row } from '../Types/Row';
import ToggleOptionView from './ToggleOptionView';

function AnswerRowView(props: { row: Row, isLocked: boolean }) {

    return (
        <div className="flex-row row">
            {props.row.options.map((option, i) => {
                return (<ToggleOptionView key={option.id} row={props.row} option={option} isLocked={props.isLocked} />) 
            })}
        </div>
    );
}

export default AnswerRowView;
