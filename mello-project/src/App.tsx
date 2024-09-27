import { Routes, Route } from "react-router-dom";
// import Artworks from './pages/Artworks';
import TitleBar from "./components/titlebar";

const App = () => {
  return (
    <>
    <div className="full-screen-div">
      <TitleBar titlelist={["HOME", "WORK", "PROJECTS", "ABOUT", "CONTACT", "ARTWORK", "DUMMY", "DUMMY", "DUMMY",]} />
    </div>
    </>
  );
};

export default App;
