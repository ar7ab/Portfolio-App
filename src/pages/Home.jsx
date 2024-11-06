import { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero"
import { DarkModeContext } from "../context/DarkModeContext";
const Home = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div
            className={`min-h-screen ${darkMode
                ? "bg-dark-background text-dark-primary"
                : "bg-background text-black"
                }`}
        >
            <Navbar />
            <Hero />
        </div>
    );
};

export default Home;
