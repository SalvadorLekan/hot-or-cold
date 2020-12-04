import { useState } from "react";

const colorList = [
  "blue-900",
  "blue-800",
  "blue-700",
  "blue-600",
  "blue-500",
  "blue-400",
  "blue-300",
  "blue-200",
  "blue-100",
  "blue-50",
  "red-50",
  "red-100",
  "red-200",
  "red-300",
  "red-400",
  "red-500",
  "red-600",
  "red-700",
  "red-800",
  "red-900",
];

function App() {
  const handleReset = () => {
    setRandomNumber(Math.floor(Math.random() * 101));
    settemp("cold");
    setprogressBar(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const pV = 100 - Math.abs(inputValue - randomNumber);
    if (pV === 100) settemp("correct");
    else if (pV < progressBar) settemp("colder");
    else if (progressBar < 50 && progressBar < pV) settemp("warmer");
    else settemp("hotter");
    setprogressColor(colorList[Math.round(pV / 5) - 1]);
    setprogressBar(pV);
    setinputValue("");
  };
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 101)
  );
  const [inputValue, setinputValue] = useState("");
  const [progressBar, setprogressBar] = useState(0);
  const [progressColor, setprogressColor] = useState("");
  const [temp, settemp] = useState("cold");
  return (
    <div className="container mx-auto items-center flex-col justify-around h-screen flex">
      <form
        onSubmit={handleSubmit}
        className="border-purple-600 border-2 rounded-3xl p-4"
      >
        <label>
          <p>Type a number from 0 to 100</p>
          <input
            placeholder="Type a number"
            type="number"
            min="0"
            max="100"
            required
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
            className="block w-full outline-none border-transparent rounded-2xl p-2 focus:border-purple-600 border-2"
          />
        </label>
        <div className="flex items-center pt-4 justify-between">
          <button
            className="border-2 hover:border-transparent hover:bg-purple-600 hover:text-white py-1 px-4 rounded-full border-purple-600 text-purple-600"
            type="submit"
          >
            Check
          </button>
          <button
            className="border-2 hover:border-transparent hover:bg-indigo-900 hover:text-white py-1 px-4 rounded-full border-indigo-900 text-indigo-900"
            type="button"
            onClick={handleReset}
          >
            Restart
          </button>
        </div>
      </form>
      <label>
        <p>{temp}</p>
        <progress
          className={`bg-white rounded-2xl border-2 ${progressColor}`}
          value={progressBar}
          max="100"
        ></progress>
      </label>
      {temp === "correct" && (
        <div className="bg-gray-50 px-11 fixed h-screen text-center flex justify-center items-center top-0">
          <div>
            <h3>You Found it!</h3>
            <p>The right number is {randomNumber}</p>
            <button
              className="border-2 hover:border-transparent hover:bg-indigo-900 hover:text-white py-1 px-4 rounded-full border-indigo-900 text-indigo-900"
              onClick={handleReset}
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
