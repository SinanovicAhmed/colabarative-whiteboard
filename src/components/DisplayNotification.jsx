// eslint-disable-next-line react/prop-types
const DisplayNotification = ({ notification }) => {
  if (notification !== 0) {
    return (
      <div
        className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 
        whitespace-nowrap rounded-full bg-red-600 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white"
      >
        {notification < 100 ? notification : "99+"}
      </div>
    );
  }
  return null;
};

export default DisplayNotification;
