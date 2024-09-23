import ListView from "@/components/list_view";
import "../App.css";
import "../assets/back.svg";
import { useState } from "react";
// import TitleBar from "../components/ui/titlebar";

function Projects() {
  return (
    <>
    <div className="flex-col justify-center align-center">
    <ListView domain="work"/>
    </div>
    </>
  );
}

export default Projects;
