import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  quizSection: 0,
  score: 0,
  winner: false,
  arrOfQuestions: [
    "which is largest animal in the world?",
    "Which is the smallest country in the world?",
    "Which is the largest desert in the world ?",
    "Which is the smallest continent in the world?",
  ],
  arrOfChoices: [
    ["shark", "blue whale", "elephant", "giraffe"],
    ["vatican city", "bhutan", "nepal", "shri lanka"],
    ["kalahari", "gobi", "sahara", "antarctica"],
    ["asia", "australia", "arctic", "africa"],
  ],
  answers: ["blue whale", "vatican city", "antarctica", "australia"],
};

let containerSlice = createSlice({
  name: "QuizArrays",
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.score += 1;
    },
    win: (state) => {
      state.winner = !state.winner;
    },
    incrementQuizSection: (state) => {
      state.quizSection += 1;
    },
    playAgain: (state) => {
      state.score = 0;
      state.winner = false;
      state.quizSection = 0;
    },
  },
});

export let { incrementScore, win, playAgain, incrementQuizSection } =
  containerSlice.actions;
export default containerSlice.reducer;
