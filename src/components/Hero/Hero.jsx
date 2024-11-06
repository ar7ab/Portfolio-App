import { useContext } from "react";
import banner from "../../assets/userImg.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { DarkModeContext } from "../../context/DarkModeContext";
import { PiReadCvLogoFill } from "react-icons/pi";
import CV from "../../assets/Ahmed_Arhab_CV.pdf";

const Hero = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div
            className={`w-full flex flex-col-reverse md:flex-row relative top-20 md:top-32 gap-3 pb-8  ${darkMode
                ? "bg-dark-background text-dark-primary"
                : "bg-background text-black"
                }`}
        >
            <div
                className={`flex flex-col justify-center items-center md:block px-4 md:px-32 md:py-20 font-open-sans w-full md:w-[60%] ${darkMode ? "text-dark-primary" : "text-primary"
                    }`}
            >
                <h2 className="text-3xl">
                    <span className={darkMode ? "text-dark-secondary" : "text-secondary"}>
                        Frontend
                    </span>{" "}
                    Developer
                </h2>
                <h1 className="text-4xl mb-2  md:text-6xl mt-2 font-semibold">
                    Ahmed{" "}
                    <span className={darkMode ? "text-dark-secondary" : "text-secondary"}>
                        Arhab
                    </span>
                </h1>
                <p className="text-sm mt-2 text-center md:text-start">
                    As an entry-level React Developer, I am eager to apply my foundational
                    knowledge of React.js and related web development technologies to
                    contribute to the creation of responsive and user-centric web
                    applications. I am committed to leveraging my skills in HTML, CSS,
                    JavaScript, and React to deliver high-quality solutions that enhance
                    user experiences.
                </p>
                <div
                    className={`btns mt-5 flex-col flex justify-center items-center md:block ${darkMode ? "text-dark-primary" : "text-primary"
                        }`}
                >
                    <a
                        className={`flex justify-center items-center py-1 px-2 border rounded-md w-fit focus:border-dark-secondary hover:border-dark-secondary transition-all duration-150 ease-linear ${darkMode ? "border-dark-primary" : "border-primary"
                            }`}
                        href="mailto:ahmedarhab018@gmail.com"
                        aria-label="Email Ahmed Arhab"
                    >
                        <MailOutlineIcon style={{ fontSize: 20, marginRight: 5 }} />
                        <span>ahmedarhab018@gmail.com</span>
                    </a>
                    <a
                        className={`flex justify-center items-center py-1 px-2 border rounded-md w-fit focus:border-dark-secondary hover:border-dark-secondary transition-all duration-150 ease-linear my-3 ${darkMode ? "border-dark-primary" : "border-primary"
                            }`}
                        href="tel:+201025980850"
                        aria-label="Call Ahmed Arhab"
                    >
                        <PhoneIcon style={{ fontSize: 20, marginRight: 5 }} />
                        <span>+201025980850</span>
                    </a>
                    <a
                        className={`flex justify-center items-center py-1 px-2 border rounded-md w-fit focus:border-dark-secondary hover:border-dark-secondary transition-all duration-150 ease-linear  ${darkMode ? "border-dark-primary" : "border-primary"
                            }`}
                        href={CV}
                        aria-label="CV"
                        download
                    >
                        <PiReadCvLogoFill style={{ fontSize: 20, marginRight: 5 }} />
                        <span>DownLoad CV</span>
                    </a>
                </div>
                <div className="social-icon mt-5 flex items-center justify-between gap-4 w-fit">
                    <a
                        href="https://www.linkedin.com/in/ahmed-arhab/"
                        target="_blank"
                        aria-label="LinkedIn Profile"
                        className={`flex justify-center items-center p-2 border rounded-full w-fit transition-all duration-150 ease-linear ${darkMode
                            ? darkMode
                                ? "hover:border-dark-primary border-dark-secondary"
                                : "hover:border-primary border-secondary"
                            : darkMode
                                ? "hover:border-dark-secondary border-dark-primary"
                                : "hover:border-secondary border-primary"
                            }`}
                    >
                        <FaLinkedin
                            className={`text-2xl ${darkMode ? "text-dark-primary" : "text-primary"
                                }`}
                        />
                    </a>
                    <a
                        href="https://github.com/ar7ab"
                        target="_blank"
                        aria-label="GitHub Profile"
                        className={`flex justify-center items-center p-2 border rounded-full w-fit transition-all duration-150 ease-linear ${darkMode
                            ? darkMode
                                ? "hover:border-dark-primary border-dark-secondary"
                                : "hover:border-primary border-secondary"
                            : darkMode
                                ? "hover:border-dark-secondary border-dark-primary"
                                : "hover:border-secondary border-primary"
                            }`}
                    >
                        <FaGithub
                            className={`text-2xl ${darkMode ? "text-dark-primary" : "text-primary"
                                }`}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/ahmed_arhab09/"
                        target="_blank"
                        aria-label="Instagram Profile"
                        className={`flex justify-center items-center p-2 border rounded-full w-fit transition-all duration-150 ease-linear ${darkMode
                            ? darkMode
                                ? "hover:border-dark-primary border-dark-secondary"
                                : "hover:border-primary border-secondary"
                            : darkMode
                                ? "hover:border-dark-secondary border-dark-primary"
                                : "hover:border-secondary border-primary"
                            }`}
                    >
                        <BiLogoInstagramAlt
                            className={`text-2xl ${darkMode ? "text-dark-primary" : "text-primary"
                                }`}
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100009224477705"
                        target="_blank"
                        aria-label="Facebook Profile"
                        className={`flex justify-center items-center p-2 border rounded-full w-fit transition-all duration-150 ease-linear ${darkMode
                            ? darkMode
                                ? "hover:border-dark-primary border-dark-secondary"
                                : "hover:border-primary border-secondary"
                            : darkMode
                                ? "hover:border-dark-secondary border-dark-primary"
                                : "hover:border-secondary border-primary"
                            }`}
                    >
                        <FaFacebook
                            className={`text-2xl ${darkMode ? "text-dark-primary" : "text-primary"
                                }`}
                        />
                    </a>
                </div>
            </div>
            <div className="img w-full md:w-[50%] flex items-start justify-center">
                <div className="user-banner w-fit h-48 md:h-96 relative bg-dark-secondary flex justify-center items-center rounded-full overflow-hidden animate-slide-x self-center">
                    <img
                        className="h-full w-auto"
                        src={banner}
                        alt="Ahmed Arhab's profile"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
