import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
import Whyus from "./Components/Whyus";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

      <section id="pricing" className="scroll-mt-24">
        <Pricing />
      </section>

      <section id="whyus" className="scroll-mt-24">
        <Whyus />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contactus />
      </section>

      <Footer />
    </div>
  );
};

export default App;