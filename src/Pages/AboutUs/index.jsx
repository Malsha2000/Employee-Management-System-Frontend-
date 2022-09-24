import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AboutUs from "../Components/AboutUs";

const AboutUsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            
            <Header toggle={toggle} />
            <AboutUs />
            <Footer />
        </>
    );
};

export default AboutUsPage;
