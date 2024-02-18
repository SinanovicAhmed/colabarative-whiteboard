import HeroSectionBreak from "./HeroSectionBreak";

const Hero = () => {
  return (
    <section className="relative flex justify-center items-start w-full bg-sky-700 px-5 sm:px-10 md:px-20 pb-20">
      <div className="w-full max-w-[1250px] flex justify-center items-center gap-6 pb-40 lg:pb-20 pt-10 lg:pt-0">
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-4 items-start lg:pr-10">
          <h2 className="text-xl md:text-3xl text-white font-bold">Brainstorm Together, Anywhere</h2>
          <p className="text-sm md:text-base text-gray-300 pb-4">
            Ditch the limitations of physical whiteboards and collaborate seamlessly with your team, no matter
            where they are. Our intuitive online platform empowers you to brainstorm visually, capture ideas
            effortlessly, and turn them into reality with real-time collaboration.
          </p>

          <button className="border-2 border-white text-white px-3 py-1 rounded-md hover:bg-white hover:bg-opacity-20">
            Try it out
          </button>
        </div>
        <div className="hidden md:block w-full md:px-0 md:w-1/2">
          <img src="/images/heroimage.png" alt="hero image" />
        </div>
      </div>
      <HeroSectionBreak />
    </section>
  );
};

export default Hero;
