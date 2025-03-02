import { Route, Routes } from "react-router";
import MainMenu from "./pages/MainMenu";
import Game from "./pages/Game";
import OperationMenu from "./pages/OperationMenu";
import "./reset.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainMenu />} />
        <Route path="/operation" element={<OperationMenu />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
