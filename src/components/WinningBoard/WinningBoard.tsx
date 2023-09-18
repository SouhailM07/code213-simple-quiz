import "./winningboard.css";
// !redux
import { useSelector, useDispatch } from "react-redux";
import { playAgain } from "../Container/containerSlice";
//========================================================================================
// component section
//========================================================================================
export default function WinningBoard() {
  // !redux
  let dispatch = useDispatch();
  let score = useSelector((state: any) => state.quiz.score);
  return (
    <>
      <div
        id="winningBoard"
        className="absolute bg-white h-[25rem] w-[55rem] rounded-xl justify-center flex "
      >
        <div className=" w-[90%] h-[19rem] flex flex-col justify-evenly ">
          <h1 className="text-[2rem] font-semibold ">Simple Quiz</h1>
          <hr className="bg-red-500 h-1  rounded-2xlo" />
          <p className="p-score text-[2rem] font-semibold">
            You score is {score}
          </p>
          <button
            onClick={() => {
              dispatch(playAgain());
            }}
            className="bg-blue-900  w-[10rem] h-[4rem] mt-12  text-white text-[1.5rem] font-medium self-center "
          >
            Play again
          </button>
        </div>
      </div>
    </>
  );
}
