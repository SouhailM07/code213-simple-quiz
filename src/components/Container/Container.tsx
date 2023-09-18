import "./container.css";
// hooks
import { useState, useId, useRef } from "react";
export default function Container() {
  // ! useState
  let [quiz, setQuiz] = useState(0);
  let [btn, setBtn] = useState(false);

  let arrOfIdElements: any = [];

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
  let arrOfAnswers: any = [
    "blue whale",
    "vatican city",
    "antarctica",
    "australia",
  ];

  return (
    <>
      <div className="bg-white w-[55rem] h-[38rem] rounded-2xl px-[2.7rem]  flex flex-col">
        <div className="flex flex-col justify-evenly h-[30rem] mt-2">
          <h1 className="text-[2rem] font-semibold ">Simple Quiz</h1>
          <hr className="bg-red-500 h-1  rounded-2xlo" />
          <p className="text-[1.7rem] font-medium">
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
                    setBtn(!btn);
                    let selectedQuiz = document.getElementById(
                      quizRef.current.id
                    );
                    console.log(arrOfIdElements);
                    arrOfIdElements.push(selectedQuiz);
                    if (arrOfAnswers.includes(selectedQuiz?.textContent)) {
                      selectedQuiz?.classList.add("bg-green-500");
                    } else {
                      for (let i of arrOfAnswers) {
                        if (arrOfChoices[quiz].includes(i)) console.log(i);
                      }
                      selectedQuiz?.classList.add("bg-red-500");
                    }
                    // console.log(quizRef.current);
                  }}
                  className="capitalize font-medium pl-[1.4rem] hover:cursor-pointer hover:bg-slate-900 hover:text-white border-2 border-black text-[1.4rem] p-2 rounded-lg my-5"
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
              setQuiz(++quiz);
              setBtn(!btn);

              for (let i of arrOfIdElements) {
                console.log(i);
                let element = document.getElementById(i.id);
                element?.classList.remove("bg-green-500");
                element?.classList.remove("bg-red-500");
              }
            }}
            className="bg-blue-900  w-[10rem] h-[4rem] text-white text-[1.5rem] font-medium self-center"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}
