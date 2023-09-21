import { configureStore } from "@reduxjs/toolkit";
import containerSlice from "./components/Container/containerSlice";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
let store: ToolkitStore<{
  quiz: {
    quizSection: number;
    score: number;
    winner: boolean;
    arrOfQuestions: string[];
    arrOfChoices: string[][];
    answers: string[];
  };
}> = configureStore({
  reducer: {
    quiz: containerSlice,
  },
});

export default store;
