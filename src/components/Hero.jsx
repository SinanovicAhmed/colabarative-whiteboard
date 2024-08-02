import "../index.css";

const Hero = () => {
  return (
    <section className="flex flex-col gap-8 items-center justify-center bg-background-image w-full min-h-[600px] bg-contain bg-center">
      <h2 className="text-gray-800 text-xl md:leading-relaxed md:text-3xl lg:leading-relaxed lg:text-5xl font-bold text-center">
        An intuitive Online{" "}
        <span className="custom-mark-yellow m-0 -mx-1 px-1 py-0.5 rounded-[0.8em_0.3em]">Whiteboard</span> For <br />{" "}
        Teams to Ideate and Collaborate <br />
        in <span className="custom-mark-pink m-0 -mx-1 px-1 py-0.5 rounded-[0.8em_0.3em]">Real-Time</span>
      </h2>
      <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm md:text-lg rounded-full py-2 px-4 transition duration-300 ease-in-out">
        Try Out for Free
      </button>
    </section>
  );
};

export default Hero;
