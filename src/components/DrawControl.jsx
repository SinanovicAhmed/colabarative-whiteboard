// eslint-disable-next-line react/prop-types
const DrawControl = ({ setColor, color, clearCanvas }) => {
  const handleColorChange = (event) => setColor(event.target.value);
  console.log(color);
  return (
    <div className="absolute bottom-4 flex gap-4">
      <div
        style={{ backgroundColor: color }}
        className="flex items-center gap-3 bg-gray-200 border-2 border-gray-300 rounded-lg px-2 py-1 transition-all duration-300"
      >
        <input
          type="radio"
          id="color-black"
          name="color"
          value="#000"
          onChange={handleColorChange}
          className="hidden"
        />
        <label
          htmlFor="color-black"
          className="h-4 w-4 rounded-full bg-black cursor-pointer border border-transparent hover:border-gray-400"
        />
        <input
          type="radio"
          id="color-white"
          name="color"
          value="#fff"
          onChange={handleColorChange}
          className="hidden"
        />
        <label
          htmlFor="color-white"
          className="h-4 w-4 rounded-full bg-white cursor-pointer border border-transparent hover:border-gray-400"
        />

        <input
          type="radio"
          id="color-red"
          name="color"
          value="#dc2626"
          onChange={handleColorChange}
          className="hidden"
        />
        <label
          htmlFor="color-red"
          className="h-4 w-4 rounded-full bg-red-600 cursor-pointer border border-transparent hover:border-gray-400"
        />

        <input
          type="radio"
          id="color-green"
          name="color"
          value="#15803d"
          onChange={handleColorChange}
          className="hidden"
        />
        <label
          htmlFor="color-green"
          className="h-4 w-4 rounded-full bg-green-700 cursor-pointer border border-transparent hover:border-gray-400"
        />

        <input
          type="radio"
          id="color-purple"
          name="color"
          value="#7e22ce"
          onChange={handleColorChange}
          className="hidden"
        />
        <label
          htmlFor="color-purple"
          className="h-4 w-4 rounded-full bg-purple-700 cursor-pointer border border-transparent hover:border-gray-400"
        />

        <input
          type="radio"
          id="color-orange"
          name="color"
          value="#ea580c"
          onChange={handleColorChange}
          className="hidden"
        />
        <label
          htmlFor="color-orange"
          className="h-4 w-4 rounded-full bg-orange-600 cursor-pointer border border-transparent hover:border-gray-400"
        />
      </div>

      <button
        onClick={clearCanvas}
        className="px-3 border-2 border-red-700 hover:bg-red-700 text-red-700 hover:text-white rounded-md transition-all"
      >
        Clear
      </button>
    </div>
  );
};

export default DrawControl;
