import { useState } from "react";
import HistoryListing from "./HistoryListing";

export default function History({ display }) {
  const [history, setHistory] = useState([]);
  const arr = new Array(100);
  arr.fill();

  chrome.runtime
    .sendMessage({ msg: "HISTORY" })
    .then((response) => {
      setHistory(response);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div
      className={`bg-gray-700 w-full h-full ${
        display === "" ? "inline-block" : "hidden"
      }`}
    >
      <ul className={"overflow-y-scroll h-full w-full px-2 py-1"}>
        {history.map((val, index) => {
          return (
            <HistoryListing
              id={index}
              setHistory={setHistory}
              dateAndTime={val.dateAndTime}
              content={val.content}
            />
          );
        })}
      </ul>
    </div>
  );
}
