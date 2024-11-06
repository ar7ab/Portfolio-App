import Navbar from "../components/Navbar/Navbar";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
    const { darkMode } = useContext(DarkModeContext);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "68a1d405-9818-49b4-8049-be07d3114447");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <div
            className={`min-h-screen ${darkMode
                ? "bg-dark-background text-dark-primary"
                : "bg-background text-black"
                }`}
        >
            <Navbar />
            <div
                className={`resume grid grid-cols-1 md:grid-cols-2 justify-center gap-5 px-6 md:px-48 relative py-8 top-12 md:top-32 font-open-sans w-full ${darkMode
                    ? "bg-dark-background text-dark-primary"
                    : "bg-background text-black"
                    }`}
            >
                <div className="conatct-info p-5 w-fit">
                    <h1 className="title text-xl font-semibold">Conatct Info</h1>
                    <div className="boxs p-5 grid grid-cols-1 gap-7 border-b border-dark-primary  ">
                        <div className="box flex flex-row gap-5 items-center">
                            <div className="icon">
                                <FaEnvelope
                                    className={`text-2xl ${darkMode ? "text-dark-secondary" : "text-secondary"
                                        }`}
                                />
                            </div>
                            <div className="text ">
                                <h1 className="title text-sm font-semibold">Mail Us</h1>
                                <div className="content text-sm ">
                                    <a
                                        href="mailto:ahmedarhab018@gmail.com"
                                        target="_blank"
                                        className={`hover:text-dark-secondary ${darkMode ? "text-dark-primary" : "text-primary"
                                            }`}
                                    >
                                        ahmedarhab018@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="box flex flex-row gap-5 items-center">
                            <div className="icon">
                                <FaPhoneAlt
                                    className={`text-2xl ${darkMode ? "text-dark-secondary" : "text-secondary"
                                        }`}
                                />
                            </div>
                            <div className="text ">
                                <h1 className="title text-sm font-semibold">Contact Us</h1>
                                <div className="content text-sm ">
                                    <a href="tel:+"></a>
                                    <a
                                        href="tel:+201025980850"
                                        target="_blank"
                                        className={`hover:text-dark-secondary ${darkMode ? "text-dark-primary" : "text-primary"
                                            }`}
                                    >
                                        +201025980850
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="box flex flex-row gap-5 items-center">
                            <div className="icon">
                                <FaLocationDot
                                    className={`text-2xl ${darkMode ? "text-dark-secondary" : "text-secondary"
                                        }`}
                                />
                            </div>
                            <div className="text ">
                                <h1 className="title text-sm font-semibold">Address</h1>
                                <div className="content text-sm ">
                                    <a href="tel:+"></a>
                                    <a
                                        href=""
                                        target="_blank"
                                        className={`hover:text-dark-secondary ${darkMode ? "text-dark-primary" : "text-primary"
                                            }`}
                                    >
                                        Al-Mahalla, El-Gharbia, Egypt
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="title text-xl font-semibold mt-7">Social Info</h1>
                    <div className="boxs p-5 grid grid-cols-3">
                        <div
                            className={`box text-3xl hover:text-dark-secondary transition-all duration-200 ease-linear`}
                        >
                            <a
                                href="https://www.linkedin.com/in/ahmed-arhab-b29687274/"
                                target="_blank"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                        <div
                            className={`box text-3xl hover:text-dark-secondary transition-all duration-200 ease-linear`}
                        >
                            <a href="https://github.com/ar7ab" target="_blank">
                                <FaGithub />
                            </a>
                        </div>
                        <div
                            className={`box text-3xl hover:text-dark-secondary transition-all duration-200 ease-linear`}
                        >
                            <a
                                href="https://www.instagram.com/ahmed_arhab09/"
                                target="_blank"
                            >
                                <FaSquareInstagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className={`form p-4 md:p-7 ${darkMode ? "bg-[#1E1C21] " : "bg-[#F6F0F9] "
                        } rounded-xl`}
                >
                    <h1 className="title text-xl font-semibold mb-5">
                        Let’s Work Together.
                    </h1>

                    <form onSubmit={onSubmit} className="flex flex-col gap-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            className="bg-transparent outline-none w-full border-dark-primary border 
               p-3 focus:border-dark-secondary rounded-xl  transition-all duration-300 ease-linear"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            className="bg-transparent outline-none w-full border-dark-primary border 
               p-3 focus:border-dark-secondary rounded-xl  transition-all duration-300 ease-linear"
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject*"
                            className="bg-transparent outline-none w-full border-dark-primary border 
               p-3 focus:border-dark-secondary rounded-xl  transition-all duration-300 ease-linear"
                            required
                        />
                        <textarea
                            placeholder="Message*"
                            name="message"
                            className="bg-transparent outline-none w-full border-dark-primary border 
               p-3 focus:border-dark-secondary rounded-xl  transition-all duration-300 ease-linear"
                            required
                            rows={4}
                        ></textarea>
                        <button
                            type="submit"
                            className={`${darkMode
                                ? "bg-dark-secondary text-dark-primary hover:bg-[#6644df]"
                                : "bg-gray-400 text-primary hover:bg-dark-secondary"
                                } p-3 focus:border-dark-secondary rounded-xl  transition-all duration-300 ease-linear`}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
