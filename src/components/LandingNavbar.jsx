const LandingNavbar = () => {
  return (
    <nav className="w-full flex justify-center bg-sky-700 px-5 sm:px-10 md:px-20 py-1">
      <div className="w-full flex justify-between max-w-[1250px]">
        <img src="/images/logo.png" width={50} height={50} alt="website logo" />
        <span className="flex items-center gap-2 md:gap-6">
          <button className="text-white text-sm md:text-base px-3 py-1 hover:text-gray-300">
            Continue as guest
          </button>
          <button className="text-white px-3 py-1 text-sm md:text-base bg-white bg-opacity-15 rounded-md border-[1px] border-white hover:bg-opacity-20 transition-all">
            Sign in with google
          </button>
        </span>
      </div>
    </nav>
  );
};

export default LandingNavbar;
