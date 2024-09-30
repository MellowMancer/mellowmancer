import { Routes, Route } from "react-router-dom";
// import Artworks from './pages/Artworks';
import Titlebar from "@/components/TitleBar";
import ThemeToggle from "@/components/ThemeToggle";

const App = () => {
  return (
    <>
    <div className="full-screen-div">
      <Titlebar titlelist={["HOME", "WORK", "PROJECTS", "ABOUT", "CONTACT", "ARTWORK", "DUMMY", "DUMMY", "DUMMY",]} />
      <ThemeToggle />
    </div>
    </>
  );
};

export default App;
