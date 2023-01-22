import React from "react";

import Benefits from "@features/home/benefits";
import Counter from "@features/home/counter";
import Faq from "@features/home/faq";
import Footer from "@features/home/footer";
import Hero from "@features/home/hero";
import SelfConsumption from "@features/home/self-consumption";
import Solutions from "@features/home/solutions";
import Warranty from "@features/home/warranty";

const Home = () => {
    return (
        <main>
            <Hero />
            <Benefits />
            <SelfConsumption />
            <Solutions />
            <Warranty />
            <Counter />
            <Faq />
            <Footer />
        </main>
    );
};

export default Home;
