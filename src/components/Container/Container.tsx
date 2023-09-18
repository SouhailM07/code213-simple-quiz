import "./container.css";
// ! redux
import { useDispatch, useSelector } from "react-redux";
import { incrementScore, win, incrementQuizSection } from "./containerSlice";
// hooks
import { useState, useId, useRef, Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";
//=======================================================================================
// component section
//=======================================================================================
export default function Container() {
  // !redux
  let dispatch: Dispatch<AnyAction> = useDispatch();
  let arrOfQuestions = useSelector((state: any) => state.quiz.arrOfQuestions),
    arrOfChoices = useSelector((state: any) => state.quiz.arrOfChoices),
    answers = useSelector((state: any) => state.quiz.answers),
    quiz = useSelector((state: any) => state.quiz.quizSection);
  // ! useState
  let [btn, setBtn] = useState(false);
  let [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div
        id="container"
        className="relative  bg-white w-[55rem] h-[auto] rounded-2xl px-[2.7rem]  flex flex-col"
      >
        <div
          id="quiz-container"
          className="flex flex-col justify-evenly h-[30rem] mt-2 "
        >
          <h1 className="text-[2rem] font-semibold ">Simple Quiz</h1>
          <hr className="bg-red-500 h-1  rounded-2xlo" />
          <p className="p-quiz text-[1.7rem] font-medium">
            {`${quiz + 1}. ${arrOfQuestions[quiz]}`}
          </p>
          <ul>
            {arrOfChoices[quiz].map((e, i) => {
              // ! useRef + useId
              let quizId = useId();
              let quizRef: any = useRef(null);
              return (
                <li
                  key={i}
                  ref={quizRef}
                  id={quizId}
                  onClick={() => {
                    if (!isClicked) {
                      setBtn(!btn);
                      setIsClicked(!isClicked);
                      let selectedQuiz = document.getElementById(
                        quizRef.current.id
                      );
                      if (answers[quiz] == selectedQuiz?.textContent) {
                        selectedQuiz?.classList.add("bg-green-500");
                        dispatch(incrementScore());
                      } else {
                        selectedQuiz?.classList.add("bg-red-500");
                      }
                    }
                  }}
                  className="li-quiz capitalize font-medium pl-[1.4rem] hover:cursor-pointer hover:bg-slate-900 hover:text-white border-2 border-black text-[1.4rem] p-2 rounded-lg my-5"
                >
                  {e}
                </li>
              );
            })}
          </ul>
        </div>
        {btn && (
          <button
            onClick={() => {
              if (quiz === 3) dispatch(win());
              dispatch(incrementQuizSection());
              setBtn(!btn);
              setIsClicked(!isClicked);
              let element = document.querySelectorAll(".li-quiz");
              for (let i of element) {
                i.classList.remove("bg-green-500");
                i.classList.remove("bg-red-500");
              }
            }}
            className="bg-blue-900  w-[10rem] h-[4rem]  mb-[2rem]  text-white text-[1.5rem] font-medium self-center"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}
