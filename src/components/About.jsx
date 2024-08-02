const About = () => {
  return (
    <section className="mx-auto flex flex-col gap-20 justify-center items-center px-5 sm:px-10 md:px-20 py-5 max-w-7xl">
      <div className="md:w-3/4">
        <img src="/images/window.png" alt="Whiteboard image" className="w-full h-auto" />
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="space-y-4">
          <h2 className="text-gray-800 text-xl md:text-3xl font-bold">
            <span className="custom-mark-yellow m-0 -mx-1 px-1 py-0.5 rounded-[0.8em_0.3em]">Brainstorm together</span>.
          </h2>
          <p className="text-gray-800 font-medium">
            Unleash Your Createive Ideas On An Infinite
            <br /> Canvas And Colaborate In Real Time
            <br /> From Any Location
          </p>
        </div>
        <img src="/images/aboutimage.png" alt="Whiteboard image" className="w-[600px] h-auto" />
      </div>
    </section>
  );
};

export default About;
