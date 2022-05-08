import { Answer } from "./Answer";

export interface Question {
    id: string,
    questionText: string;
    answer: Answer;
}
