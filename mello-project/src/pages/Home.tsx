import "../App.css";
import "../index.css";
import "../assets/back.svg";
// import TitleBar from "../components/ui/titlebar";

function Home() {
  return (
    <div className="home flex px-12 md:px-16 lg:px-24 xl:px-36 2xl:px-44 h-full w-full overflow-y-hidden">
      <div className="flex flex-col justify-center font-bold font-sofia text-[var(--text-color)]">
        <div className="text-start text-6xl sm:text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9rem] 2xl:text-[12rem] -tracking-[.1em] font-sofia font-semibold">
         'ello
        </div>
        <div className="text-start w-full flex-column justify-center content-start mr-4 text-sm sm:text-xl font-sofia font-semibold">
          Welcome to the repository of my work, creations and thoughts
        </div>
      </div>
        
    </div>
  );
}

export default Home;
