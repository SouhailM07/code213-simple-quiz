import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  score: 0,
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
  },
});

export let { incrementScore } = containerSlice.actions;
export default containerSlice.reducer;
