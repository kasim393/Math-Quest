import { Route, Routes } from "react-router";
import MainMenu from "./pages/MainMenu";
import Game from "./pages/Game";
import OperationMenu from "./pages/OperationMenu";
import "./reset.css";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainMenu />} />
        <Route path="/operation" element={<OperationMenu />} />
        <Route path="/game" element={<Game />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
