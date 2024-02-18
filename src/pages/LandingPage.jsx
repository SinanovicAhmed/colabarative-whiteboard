import Hero from "../components/Hero";
import About from "../components/About";
import LandingNavbar from "../components/LandingNavbar";

const LandingPage = () => {
  return (
    <main className="relative bg-gray-100">
      <LandingNavbar />
      <Hero />
      <About />
    </main>
  );
};

export default LandingPage;
