import { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { DarkModeContext } from "../context/DarkModeContext";
import YT_ProjectImg from "../assets/YouTube_Project.webp";
import ToDo_ListImg from "../assets/Todo-List.webp";
import CalculatorImg from "../assets/calculatorImg.webp";
import SearchImg from "../assets/SearchImg.webp";
import PortfolioImg from "../assets/Portfolio_Img.webp";
import MediVitalImg from "../assets/MediVital_Img.webp";
import MinicsImg from "../assets/MinicsImg.webp";
import MediPlusImg from "../assets/MediPlus.webp";
import DashboaedImg from "../assets/Dashboard.webp";
import E_ShopeImg from "../assets/E-shope.webp";
import E_ShoppeeImg from "../assets/shoppee.webp";

const projects = [
  {
    id: 1,
    name: "YouTube Clone - App",
    img: YT_ProjectImg,
    stackTech: "React js - Tailwind CSS - RapidApi -  React-icon - MUI",
    link: "https://ar7ab.github.io/Youtube/",
  },
  {
    id: 2,
    name: "Personal Portfolio - App",
    img: PortfolioImg,
    stackTech: "React js - Tailwind CSS -  React-icon",
    link: "https://ar7ab.github.io/Portfolio-App/",
  },
  {
    id: 3,
    name: "E-Shope Website",
    img: E_ShopeImg,
    stackTech: "React js - Tailwind CSS - Redux - Redux ToolKit - React-icon",
    link: "https://ar7ab.github.io/E-Shope/",
  },
  {
    id: 4,
    name: "E-Shoppee App",
    img: E_ShoppeeImg,
    stackTech: "React js - Tailwind CSS - React-icon",
    link: "https://ar7ab.github.io/E-commerce-shpoe-/",
  },
  {
    id: 5,
    name: "E – Commerce Website (MediVital) App",
    img: MediVitalImg,
    stackTech: "WordPress - PHP",
    link: "https://dev-medivital.pantheonsite.io/",
  },
  {
    id: 6,
    name: "ToDo List - App",
    img: ToDo_ListImg,
    stackTech: "HTML - CSS - JavaScript",
    link: "https://ar7ab.github.io/ToDo-List-App/",
  },
  {
    id: 7,
    name: "Calculator - App",
    img: CalculatorImg,
    stackTech: "HTML - CSS - JavaScript",
    link: "https://ar7ab.github.io/Calculator-App/",
  },
  {
    id: 8,
    name: "Calculator - App",
    img: SearchImg,
    stackTech: "HTML - CSS - JavaScript",
    link: "https://ar7ab.github.io/search-image-engine/",
  },
  {
    id: 9,
    name: "Minics Website",
    img: MinicsImg,
    stackTech: "HTML - CSS",
    link: "https://ar7ab.github.io/Minics-Website/",
  },
  {
    id: 10,
    name: "MediPlus Website",
    img: MediPlusImg,
    stackTech: "HTML - CSS",
    link: "https://ar7ab.github.io/MediPlus-Website/",
  },
  {
    id: 11,
    name: "Dashboard Website",
    img: DashboaedImg,
    stackTech: "HTML - CSS",
    link: "https://ar7ab.github.io/Dashboard-Website/",
  },
];

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-dark-background text-dark-primary"
          : "bg-background text-black"
      } `}
    >
      <Navbar />
      <div
        className={`projects grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 px-6 md:px-32  relative py-8 top-20 font-open-sans w-full  ${
          darkMode
            ? "bg-dark-background text-dark-primary"
            : "bg-background text-black"
        }`}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project p-6 ${
              darkMode
                ? "bg-[#1E1C21] hover:bg-[#2E2C30]"
                : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
            }  flex flex-col justify-center items-center rounded-xl  transition-all duration-300 ease-linear cursor-pointer`}
          >
            <a href={project.link} target="_blank" className="block">
              {" "}
              <div className="project-banner rounded-xl overflow-hidden">
                <img src={project.img} alt="" className="rounded-xl" />
              </div>
              <div className="project-title mt-2">{project.name}</div>
              <div
                className={`project-category mt-1 ${
                  darkMode ? "text-dark-secondary" : "text-secondary"
                }`}
              >
                <span
                  className={`${
                    darkMode ? "text-dark-primary" : " text-black"
                  }`}
                >
                  Tech Stack:
                </span>{" "}
                {project.stackTech}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
