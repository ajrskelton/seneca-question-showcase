import { configureStore, } from '@reduxjs/toolkit';
import selectReducer from './SelectSlice';
import questionReducer from './QuestionSlice';

const store = configureStore({
    reducer: {
        question: questionReducer,
        select: selectReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
