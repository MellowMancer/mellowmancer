import { Routes, Route } from "react-router-dom";
// import Artworks from './pages/Artworks';
import TitleBar from "./components/titlebar";

const App = () => {
  return (
    <>
    <div className="full-screen-div">
      <TitleBar titlelist={["HOME", "PROJECTS", "ARTWORK", "RESUME", "CONTACT", "DUMMY", "DUMMY", "DUMMY",]} />
    </div>
    </>
  );
};

export default App;
