import "./style/input.css";
import "./App.css";
// components
import { Container, WinningBoard } from "./components";
function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Container />
        <WinningBoard />
      </div>
    </>
  );
}
export default App;
