import { useRef, useEffect } from "react";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import About from "../pages/About";
import SectionContainer from "./SectionContainer";

export default function TitleBar({ titlelist }: { titlelist: string[] }) {
  const titleRefs = titlelist.map(() => useRef<HTMLLIElement | null>(null));
  const titleListRef = useRef<HTMLDivElement | null>(null);
  let sections = useRef<Element[]>([]);
  let sectionsChildRef = useRef<Element[]>([]);

  const scrollToTitle = (index: number) => {
    if (titleRefs[index].current) {
      let rect: number =
        titleRefs[index].current.getBoundingClientRect().left -
        window.innerWidth * 0.07;

      if (titleListRef.current) {
        titleListRef.current.scrollBy({ left: rect, behavior: "smooth" });
      }
    }
  };

  // Function to update the active class
  const setActiveNavItem = (index: number) => {
    titleRefs.forEach((ref) => {
      ref.current?.classList.remove("active");
    });

    if (titleRefs[index].current) {
      titleRefs[index].current?.classList.add("active");
      scrollToTitle(index);
    }
  };
  
  const setActiveElement = (index: number) => {
    setActiveNavItem(index);
    const sections = document.getElementsByClassName("section");
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the section
    }
  }

  useEffect(() => {
    sections.current = Array.from(document.getElementsByClassName("section"));

    setActiveElement(0);
  }, []);
  

  useEffect(() => {
    sectionsChildRef.current = Array.from(document.getElementsByClassName("section-child"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionsChildRef.current.findIndex(
             (child) => child === entry.target
          );
          if (entry.isIntersecting) {
            setActiveNavItem(index);
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    // Observe all sections
    sectionsChildRef.current.forEach((child) => {
      if (child) observer.observe(child);
    });

    // Cleanup observer on component unmount
    return () => {
      sectionsChildRef.current.forEach((child) => {
        if (child) observer.unobserve(child);
      });
    };
  }, [titleRefs]);

  return (
    <>
      <div className="w-full max-h-screen fixed top-0 z-50">
        <div
          ref={titleListRef}
          id="title-list"
          className="flex justify-between no-scrollbar border-b-[5px] pt-6 py-4 md:py-6 border-[color:var(--secondary-background-color)] overflow-x-scroll"
        >
          <ul className="flex justify-between">
            {titlelist.map((title, index) => (
              <li
                key={index}
                ref={titleRefs[index]}
                className={`title ${
                  title == "DUMMY" ? "invisible" : ""
                } font-sans font-black text-3xl md:text-4xl lg:text-6xl -tracking-[.1rem] italic px-3 sm:px-4 md:px-6`}
                onClick={() => {
                  scrollToTitle(index);
                  setActiveElement(index);
                }}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-1 border-b-4 border-[color:var(--secondary-background-color)]"></div>
      </div>
      <div className="section-container overflow-y-scroll h-screen">
        {/* <SectionContainer children={<Home />} id="home" /> */}
        {/* <SectionContainer children={<Work />} id="work" /> */}
        <SectionContainer children={<Projects />} id="projects" />
        {/* <SectionContainer children={<About />} id="about" /> */}
        {/* <SectionContainer children={<Contact />} id="contact" /> */}
      </div>
    </>
  );
}
