import "./style/input.css";
import "./App.css";
// components
import { Container, WinningBoard } from "./components";
// !redux
import { useSelector } from "react-redux";

function App() {
  let win = useSelector((state: any) => state.quiz.winner);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {!win ? <Container /> : <WinningBoard />}
      </div>
    </>
  );
}
export default App;
