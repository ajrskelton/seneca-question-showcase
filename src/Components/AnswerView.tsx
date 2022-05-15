import { Answer } from '../Types/Answer';
import AnswerRowView from './AnswerRowView';

function AnswerView(props: { answer: Answer, isLocked: boolean }) {

    return (
        <>
            {props.answer.rows.map((row, i) => {
                return (<AnswerRowView key={row.id} row={row} isLocked={props.isLocked} />) 
            })}
        </>
    );
}

export default AnswerView;
