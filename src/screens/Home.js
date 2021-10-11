import React from "react";
import Plan from "../components/Plan";
import Powerup from "../components/Powerup";
import Contents from "../components/Contents";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Grabs from "../components/Grabs";
import Goal from "../components/Goal";
import Strength from "../components/Strength";
import Story from "../components/Story";
import Stories from "../components/Stories";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Contents />
      <About />
      <Plan />
      <Powerup />
      <Grabs />
      <Goal />
      <Strength />
      <Story />
      <Stories />
      <Footer />
    </div>
  );
};

export default Home;
