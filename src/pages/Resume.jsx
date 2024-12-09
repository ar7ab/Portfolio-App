import { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { DarkModeContext } from "../context/DarkModeContext";
import HTML5Img from "../assets/html5.svg";
import CSS3Img from "../assets/css3.svg";
import JSImg from "../assets/javascript.svg";
import VsCodeImg from "../assets/VS_code.svg";
import GitHubImg from "../assets/github.svg";
import ReactImg from "../assets/react.js.svg";
import TailwindImg from "../assets/Tailwind_CSS_Logo.svg.png";
import TypeScriptImg from "../assets/Typescript_logo.svg.png";
import NPMImg from "../assets/Npm-logo.svg.png";
import ViteImg from "../assets/Vitejs-logo.svg.png";
import ReduxImg from "../assets/redux.svg";
import MUIImg from "../assets/material-ui-1.svg";

const Resume = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-dark-background text-dark-primary"
          : "bg-background text-black"
      }`}
    >
      <Navbar />
      <div
        className={`resume grid grid-cols-1 md:grid-cols-2 justify-center gap-5 md:gap-10 px-4 md:px-48 relative md:top-32 top-24 font-open-sans w-full ${
          darkMode
            ? "bg-dark-background text-dark-primary"
            : "bg-background text-black"
        }`}
      >
        <div
          className={`experience p-5 ${
            darkMode
              ? "bg-[#1E1C21] hover:bg-[#2e2c30c3]"
              : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
          } rounded-xl  transition-all duration-300 ease-linear`}
        >
          <h1 className="text-lg md:text-xl font-semibold mb-3 md:mb-5">
            Experience
          </h1>
          <div className="exp-items flex flex-col gap-5">
            <div className="item md:block flex flex-col gap-2">
              <h2 className="title text-sm md:text-lg">
                Intensive Training Program (ITP)
              </h2>
              <span
                className={`time-duration text-xs md:text-sm ${
                  darkMode ? "text-dark-secondary" : "text-secondary"
                } `}
              >
                Nov 2023 - Mar 2024
              </span>
              <p className="track text-sm md:text-lg">
                Software Fundamental Engineering Track
              </p>
              <p className="work-place text-sm md:text-lg">
                Information Technology Institute (ITI), Fayoum Branch.
              </p>
              <div className="project">
                <h1 className=" text-sm md:text-lg my-1">Project:</h1>
                <h1 className="title text-[13px] md:text-sm flex gap-1 md:gap-2 items-center">
                  E – Commerce Website (MediVital)
                  <a
                    href="https://dev-medivital.pantheonsite.io/"
                    target="_blank"
                    className={`block border px-2 md:text-sm py-0.5 rounded-full text-xs ${
                      darkMode ? "text-dark-primary" : "text-secondary"
                    } ${
                      darkMode
                        ? "border-dark-primary hover:border-dark-secondary"
                        : "border-primary hover:border-secondary"
                    }`}
                  >
                    Live Demo
                  </a>
                </h1>
                <h1>Technologies:</h1>
                <p
                  className={`technologies text-xs md:text-sm ${
                    darkMode ? "text-dark-secondary" : "text-secondary"
                  }`}
                >
                  HTML, CSS, Js, and WordPress
                </p>
              </div>
            </div>
            <div className="item md:block flex flex-col gap-2">
              <h2 className="title text-sm md:text-lg">
                Embedded System Diploma
              </h2>
              <span
                className={`time-duration text-xs md:text-sm${
                  darkMode ? "text-dark-secondary" : "text-secondary"
                } `}
              >
                Oct 2022 - Mar 2023
              </span>
              <p className="work-place text-sm md:text-lg">
                AMIT Company, Al Maadi, Cairo
              </p>
              <div className="project">
                <h1 className="text-sm md:text-lg my-1">Project:</h1>
                <h1 className="title text-[14px] md:text-sm flex gap-1 md:gap-2 items-center">
                  Electric Water Heater
                  <a
                    href="https://github.com/ar7ab/Electric_water_heater"
                    target="_blank"
                    className={`block border px-2 md:text-sm py-0.5 rounded-full text-xs ${
                      darkMode ? "text-dark-primary" : "text-secondary"
                    } ${
                      darkMode
                        ? "border-dark-primary hover:border-dark-secondary"
                        : "border-primary hover:border-secondary"
                    }`}
                  >
                    Live Demo
                  </a>
                </h1>
                <h1>Technologies:</h1>
                <p
                  className={`technologies text-xs md:text-sm ${
                    darkMode ? "text-dark-secondary" : "text-secondary"
                  }`}
                >
                  Embedded C, Atmega32
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="education-skills flex flex-col gap-4 md:block">
          <div
            className={`educatio p-5 ${
              darkMode
                ? "bg-[#1E1C21] hover:bg-[#2e2c30c3]"
                : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
            } rounded-xl  transition-all duration-300 ease-linear`}
          >
            <h1 className="text-lg md:text-xl font-semibold mb-3 md:mb-5">
              Education & Skills
            </h1>
            <div className="bachelor">Bachelor of Technology</div>
            <span
              className={`time-duration text-xs md:text-sm ${
                darkMode ? "text-dark-secondary" : "text-secondary"
              } `}
            >
              Sep 2019 - Jul 2023
            </span>
            <div className="faculty text-sm md:text-lg">
              Faculty of Technology and Education
            </div>
            <div className="department text-sm md:text-lg">
              Electronics Department
            </div>
            <div className="university text-sm md:text-lg">
              Beni Suef University
            </div>
            <div className="grade">
              Grade:{" "}
              <span
                className={`grade text-xs md:text-sm ${
                  darkMode ? "text-dark-secondary" : "text-secondary"
                } `}
              >
                Excellent (Ranked 9th)
              </span>
              <div className="project">
                <h1 className="text-sm md:text-lg my-1">Project:</h1>
                <h1 className="title text-[14px] md:text-sm flex gap-1 md:gap-2 items-center">
                  Smart Home
                </h1>
                <h1>Technologies:</h1>
                <p
                  className={`technologies text-xs md:text-sm ${
                    darkMode ? "text-dark-secondary" : "text-secondary"
                  }`}
                >
                  Embedded C, Arduino, App inventor
                </p>
              </div>
            </div>
          </div>
          <div className={`skills mt-2 grid grid-cols-2 md:grid-cols-4 gap-2`}>
            {" "}
            <div
              className={`skill flex flex-row gap-2 items-center ${
                darkMode
                  ? "bg-[#1E1C21] hover:bg-[#2e2c30c3]"
                  : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
              } rounded-xl  transition-all duration-300 ease-linear py-3 px-4`}
            >
              <img src={HTML5Img} alt="HTML5" />
              <div className="name text-sm">HTML5</div>
            </div>
            <div
              className={`skill flex flex-row gap-2 items-center ${
                darkMode
                  ? "bg-[#1E1C21] hover:bg-[#2e2c30c3]"
                  : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
              } rounded-xl  transition-all duration-300 ease-linear py-3 px-4`}
            >
              <img src={CSS3Img} alt="CSS3" />
              <div className="name text-sm">CSS3</div>
            </div>
            <div
              className={`skill flex flex-row gap-2 items-center ${
                darkMode
                  ? "bg-[#1E1C21] hover:bg-[#2e2c30c3]"
                  : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
              } rounded-xl  transition-all duration-300 ease-linear py-3 px-4`}
            >
              <img className="w-6" src={JSImg} alt="Js" />
              <div className="name text-sm">JavaScript</div>
            </div>
            <div
              className={`skill flex flex-row gap-2 items-center ${
                darkMode
                  ? "bg-[#1E1C21] hover:bg-[#2e2c30c3]"
                  : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
              } rounded-xl  transition-all duration-300 ease-linear py-3 px-4`}
            >
              <img className="w-6" src={VsCodeImg} alt="VSCode" />
              <div className="name text-sm">VS Code</div>
            </div>
            <div
              className={`skill flex flex-row gap-2 items-center ${
                darkMode
                  ? "bg-[#1E1C21] hover:bg-[#2e2c30c3]"
                  : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
              } rounded-xl  transition-all duration-300 ease-linear py-3 px-4`}
            >
              <img className="w-6" src={GitHubImg} alt="GitHub" />
              <div className="name text-sm">GitHub</div>
            </div>
            <div
              className={`skill flex flex-row gap-2 items-center ${
                darkMode
                  ? "bg-[#1E1C21] hover:bg-[#2e2c30c3]"
                  : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
              } rounded-xl  transition-all duration-300 ease-linear py-3 px-4`}
            >
              <img className="w-6" src={ReactImg} alt="React" />
              <div className="name text-sm">React.js</div>
            </div>
            <div
              className={`skill flex flex-row gap-2 items-center ${
                darkMode
                  ? "bg-[#1E1C21] hover:bg-[#2e2c30c3]"
                  : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
              } rounded-xl  transition-all duration-300 ease-linear py-3 px-4`}
            >
              <img className="w-6" src={TailwindImg} alt="React" />
              <div className="name text-sm">Tailwind</div>
            </div>
            <div
              className={`skill flex flex-row gap-2 items-center ${
                darkMode
                  ? "bg-[#1E1C21] hover:bg-[#2e2c30c3]"
                  : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
              } rounded-xl  transition-all duration-300 ease-linear py-3 px-4`}
            >
              <img className="w-6" src={TypeScriptImg} alt="TypeScript" />
              <div className="name text-sm">TypeScript</div>
            </div>
            <div
              className={`skill flex flex-row gap-2 items-center ${
                darkMode
                  ? "bg-[#1E1C21] hover:bg-[#2e2c30c3]"
                  : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
              } rounded-xl  transition-all duration-300 ease-linear py-3 px-4`}
            >
              <img className="w-7" src={NPMImg} alt="NPM" />
              <div className="name text-sm">NPM</div>
            </div>
            <div
              className={`skill flex flex-row gap-2 items-center ${
                darkMode
                  ? "bg-[#1E1C21] hover:bg-[#2e2c30c3]"
                  : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
              } rounded-xl  transition-all duration-300 ease-linear py-3 px-4`}
            >
              <img className="w-6" src={ViteImg} alt="ViteJs" />
              <div className="name text-sm">Vite.js</div>
            </div>
            <div
              className={`skill flex flex-row gap-2 items-center ${
                darkMode
                  ? "bg-[#1E1C21] hover:bg-[#2e2c30c3]"
                  : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
              } rounded-xl  transition-all duration-300 ease-linear py-3 px-4`}
            >
              <img className="w-6" src={ReduxImg} alt="Redux" />
              <div className="name text-sm">Redux</div>
            </div>
            <div
              className={`skill flex flex-row gap-2 items-center ${
                darkMode
                  ? "bg-[#1E1C21] hover:bg-[#2e2c30c3]"
                  : "bg-[#F6F0F9] hover:bg-[#E5DFE8]"
              } rounded-xl  transition-all duration-300 ease-linear py-3 px-4`}
            >
              <img className="w-6" src={MUIImg} alt="MUI" />
              <div className="name text-sm">MUI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
