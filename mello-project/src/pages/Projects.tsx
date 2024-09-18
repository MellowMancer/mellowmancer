import "../App.css";
import "../assets/back.svg";
import ListItem from "../components/listItem";
// import TitleBar from "../components/ui/titlebar";

function Projects() {
  return (
    <>
    <div className="flex justify-center align-center mb-[-5rem]">
      <div className="px-8 lg:px-16 grid grid-cols-12 items-end">
        <div className="row-span-full col-start-1 col-span-12 md:col-start-1 md:col-span-8 self-center z-10 align-center">
          <div className="list-parent-parent w-full mt-8 md:mt-4 md:w-full h-full justify-between">
            <ul className="list-parent flex-column h-1/4 px-12 py-12 md:pl-12 md:pr-32 md:py-14 lg:pl-16 lg:py-16 justify-center content-start text-start mr-auto sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[8.5rem] 2xl:leading-[9.5rem] text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[9rem] min-w-[30rem] overflow-y-scroll max-h-[80vh] border-b-2 border-t-2 border-[color: var(--secondary-background-color)]">
              <ListItem item="Woosh" />
              <ListItem item="Ishaara" />
              <ListItem item="Waver" />
              <ListItem item="Face-Pong" />
              <ListItem item="Spring" />
              <ListItem item="TiNY Sim" />
              <ListItem item="Count On Me" />
            </ul>
          </div>
        </div>
        <div className="project-parent row-span-full col-start-5 col-span-9 self-center pr-4 md:pr-8 z-0 align-center">
          <div className="project-container hidden md:flex items-end min-w-56 min-h-[32rem] ml-auto border-[color:var(--secondary-background-color)] border-[4px] rounded-[1rem]">
            <div className="text-right p-8 text-4xl 2xl:text-[3.2rem] font-bold font-sofia">The Smart Car Parking System</div>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects;
