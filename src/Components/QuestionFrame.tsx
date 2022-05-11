import { useDispatch, useSelector } from 'react-redux';
import { prev, next } from '../app/QuestionSlice';
import QuestionView from './QuestionView';
import questionData from '../Data/QuestionData';
import { RootState } from '../app/store';

function QuestionFrame() {
    const activeIndex = useSelector((state: RootState) => state.question.activeIndex);
    const selectedOptions: any = useSelector((state: RootState) => state.select.selectedOptions);
    const dispatch = useDispatch();
    
    let isFirstQuestion = activeIndex === 0;
    let previousQuestionMarkup = (
        <button className="start-justify" onClick={() => dispatch(prev())}>
            &lt; Previous Question
        </button>
    );
    if (isFirstQuestion) {
        previousQuestionMarkup = (
        <button className="start-justify" disabled>
            &lt; Previous Question
        </button>
        );
    }

    let isLastQuestion = activeIndex === questionData.length - 1;
    let nextQuestionMarkup = (
        <button className="end-justify" onClick={() => dispatch(next())}>
            Next Question &gt;
        </button>
    );
    if (isLastQuestion) {
        nextQuestionMarkup = (
        <button className="end-justify" disabled>
            Next Question &gt;
        </button>
        );
    }

    const activeQuestion = questionData[activeIndex];
    
    return (
        <div className="frame">
            <div className="display-panel flex-column">
                <QuestionView question={questionData[0]} isVisible={0 === activeIndex}>
                    <img className='small-image' src='water.jpg' alt='water' />
                        Water (chemical formula H2O) is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance,
                        which is the main constituent of Earth's hydrosphere and the fluids of all known living organisms (in which it acts as a solvent).
                        It is vital for all known forms of life, even though it provides neither food, energy, nor organic micronutrients.
                        Its chemical formula, H2O, indicates that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds.
                        The hydrogen atoms are attached to the oxygen atom at an angle of 104.45°. 
                        Water" is the name of the liquid state of H2O at standard conditions for temperature and pressure. 
                </QuestionView>
                <QuestionView question={questionData[1]} isVisible={1 === activeIndex}>
                    <img className='large-image' src='fire.jpg' alt='fire' />
                </QuestionView>
                <QuestionView question={questionData[2]} isVisible={2 === activeIndex}>
                    <img className='large-image' src='fish.jpg' alt='fish' />
                </QuestionView>
            </div>
            <div className="navigation-panel flex-row">
                {previousQuestionMarkup}
                {nextQuestionMarkup}
            </div>
        </div>
    );
}

export default QuestionFrame;
