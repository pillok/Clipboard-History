import { useState } from "react";
import "./App.css";
import History from "./history/History";
import ShortCut from "./commands/ShortCuts";
import { useRef } from "react";

function App() {
  const [highlighted, setHighlighted] = useState(0);

  return (
    <div className="flex flex-col items-start justify-start parent">
      {/* <div className="ml-2 mt-1 flex flex-row justify-start w-5/6">
        <span
          className={`mr-2 p-2 text-center h-full min-w-1/5 rounded-t-2xl hover:bg-gray-600 ${
            highlighted === 0 ? "bg-gray-700" : ""
          }`}
          onClick={() => {
            setHighlighted(0);
          }}
        >
          History
        </span>
        <span
          className={`mr-2 p-2 text-center h-full min-w-1/5 rounded-t-2xl hover:bg-gray-600 ${
            highlighted === 1 ? "bg-gray-700" : ""
          }`}
          onClick={() => {
            setHighlighted(1);
          }}
        >
          Commands
        </span>
      </div> */}
      <History display="" />
      {/* <History display={highlighted === 0 ? "" : "none"} /> */}
      {/* <ShortCut display={highlighted === 1 ? "" : "none"} /> */}
    </div>
  );
}

export default App;
