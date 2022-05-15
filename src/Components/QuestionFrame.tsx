import { useDispatch, useSelector } from 'react-redux';
import { prev, next } from '../app/QuestionSlice';
import { selectAll } from '../app/SelectSlice';
import { RootState } from '../app/store';
import { useEffect, useState } from 'react';
import { Question } from '../Types/Question';
import { Row } from '../Types/Row';
import { shuffle } from '../util/helpers';
import QuestionView from './QuestionView';
import questionData from '../Data/QuestionData';

function QuestionFrame() {
    const [randomQuestions, setRandomQuestions] = useState<Array<Question>>(questionData);
    const activeIndex = useSelector((state: RootState) => state.question.activeIndex);
    const dispatch = useDispatch();

    useEffect(() => {
        // Randomise order of rows and options
        let randomisedData : Array<Question> = [];
        for (let q of questionData) {
            let questionStore: Question = {
                id: q.id,
                questionText: q.questionText,
                answer: {
                    id: q.answer.id,
                    rows: []
                }
            };
            for (let r of q.answer.rows) {
                let rowStore: Row = {
                    id: r.id,
                    options: shuffle(r.options)
                };
                questionStore.answer.rows.push(rowStore);
            }
            questionStore.answer.rows = shuffle(questionStore.answer.rows);
            randomisedData.push(questionStore);
        }
        setRandomQuestions(randomisedData);

        // Randomise initial responses
        let randomResponses: any = {};
        for (let q of questionData) {
            for (let r of q.answer.rows) {
                let randomIndex = Math.floor(Math.random() * r.options.length);
                randomResponses[r.id] = r.options[randomIndex].id;
            }
        }
        dispatch(selectAll(randomResponses));
    }, []);
    
    // Disable the "Previous Question" button for the first question
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

    // Disable the "Next Question" button for the last question
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
    
    // The content displayed for a correct question is embedded in that QuestionView's children
    return (
        <div className="frame">
            <div className="display-panel flex-column">
                <QuestionView question={randomQuestions[0]} isVisible={0 === activeIndex}>
                    <img className='small-image' src='water.jpg' alt='water' />
                        Water (chemical formula H2O) is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance,
                        which is the main constituent of Earth's hydrosphere and the fluids of all known living organisms (in which it acts as a solvent).
                        It is vital for all known forms of life, even though it provides neither food, energy, nor organic micronutrients.
                        Its chemical formula, H2O, indicates that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds.
                        The hydrogen atoms are attached to the oxygen atom at an angle of 104.45°. 
                        Water" is the name of the liquid state of H2O at standard conditions for temperature and pressure. 
                </QuestionView>
                <QuestionView question={randomQuestions[1]} isVisible={1 === activeIndex}>
                    <img className='large-image' src='fire.jpg' alt='fire' />
                </QuestionView>
                <QuestionView question={randomQuestions[2]} isVisible={2 === activeIndex}>
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
