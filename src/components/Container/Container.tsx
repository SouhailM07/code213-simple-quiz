import "./container.css";
// hooks
import { useState } from "react";
export default function Container() {
  // ! useState
  let [quiz, setQuiz] = useState(0);
  let [btn, setBtn] = useState(false);

  let arrOfQuestions = [
    "which is largest animal in the world?",
    "Which is the smallest country in the world?",
    "Which is the largest desert in the world ?",
    "Which is the smallest continent in the world?",
  ];
  let arrOfChoices = [
    ["shark", "blue whale", "elephant", "giraffe"],
    ["vatican city", "bhutan", "nepal", "shri lanka"],
    ["kalahari", "gobi", "sahara", "antarctica"],
    ["asia", "australia", "arctic", "africa"],
  ];
  return (
    <>
      <div className="bg-white w-[55rem] h-[37rem] rounded-2xl px-[2.7rem] flex flex-col justify-evenly ">
        <h1 className="text-[2rem] font-semibold ">Simple Quiz</h1>
        <hr className="bg-red-500 h-1 w-[90%] rounded-2xl" />
        <p className="text-[1.8rem] font-medium">
          {`${quiz + 1}. ${arrOfQuestions[quiz]}`}
        </p>
        <div>
          {arrOfChoices[quiz].map((e, i) => {
            return (
              <div
                onClick={() => {
                  setBtn(!btn);
                }}
                key={i}
                className="capitalize font-medium pl-[1.4rem] hover:cursor-pointer
                 hover:bg-slate-900 hover:text-white border-2 border-black text-[1.4rem] p-2 rounded-lg my-5"
              >
                {e}
              </div>
            );
          })}
        </div>
        {btn && (
          <button
            onClick={() => {
              setQuiz(++quiz);
            }}
            className="bg-blue-900 w-[10rem] h-[4rem] text-white text-[1.5rem] font-medium self-center"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}
