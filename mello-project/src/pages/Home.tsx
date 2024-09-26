import "../App.css";
import "../index.css";
import "../assets/back.svg";
// import TitleBar from "../components/ui/titlebar";

function Home() {
  return (
    <div className="px-8 md:px-12 lg:px-16 xl:px-24 w-full overflow-y-hidden">
      <div className="text-start ml-auto mr-4 text-sm sm:text-lg font-mono font-semibold text-[color:var(--text-color)]">
        Hi! My name is
      </div>
      <div className="flex-column justify-center content-start text-start ml-auto mr-4 text-4xl md:text-7xl font-bold font-sofia -tracking-[.05em] text-[color:var(--text-color)]">
        <span className="hover:[color:var(--primary-color)] duration-300">
          Yatharth Wazir
        </span>
      </div>
      <div className="w-full border-[color:var(--secondary-background-color)] border-t-[1px] pt-4 md:pt-5 lg:pt-6 xl:pt-7">
        <div className="w-full flex-column justify-center content-start mr-4 text-sm sm:text-lg font-sofia font-semibold text-[color:var(--text-color)] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus
          a aliquam repudiandae officiis maiores incidunt eius quo molestiae
          iste temporibus quisquam accusamus impedit nam, accusantium velit
          deserunt alias laudantium.
        </div>
        <div className="w-full flex-column justify-center content-start mr-4 text-sm sm:text-lg font-sofia font-semibold text-[color:var(--text-color)] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus
          a aliquam repudiandae officiis maiores incidunt eius quo molestiae
          iste temporibus quisquam accusamus impedit nam, accusantium velit
          deserunt alias laudantium.
        </div>
        <div className="w-full flex-column justify-center content-start mr-4 text-sm sm:text-lg font-sofia font-semibold text-[color:var(--text-color)] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus
          a aliquam repudiandae officiis maiores incidunt eius quo molestiae
          iste temporibus quisquam accusamus impedit nam, accusantium velit
          deserunt alias laudantium.
        </div>
      </div>
    </div>
  );
}

export default Home;
