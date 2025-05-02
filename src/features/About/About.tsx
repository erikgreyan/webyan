import { useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import About from "../../components/About/index";
import Scroll from "../../components/Scroll/Scroll";
import Footer from "../../components/Footer/Footer";

const AboutPage = () => {
    useEffect(() => {
        document.body.classList.add(localStorage.getItem("lang") || "hy");
        return () => {
            document.body.classList.remove(localStorage.getItem("lang") || "hy");
        };
    }, []);
    return (
        <>
            <Nav />
            <About />
            <Scroll />
            <Footer />
        </>
    );
}

export default AboutPage;