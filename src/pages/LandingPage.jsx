import Hero from "../components/Hero";
import About from "../components/About";
import LandingNavbar from "../components/LandingNavbar";

const LandingPage = () => {
  return (
    <main>
      <LandingNavbar />
      <Hero />
      <About />
    </main>
  );
};

export default LandingPage;
