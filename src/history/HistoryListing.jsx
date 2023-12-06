export default function HistoryListing({
  id,
  setHistory,
  dateAndTime,
  content,
}) {
  function timeShortString() {
    let mins = Math.round(Math.abs(new Date() - new Date(dateAndTime)) / 60000);
    let hrs = Math.round(mins / 60);
    let days = Math.round(hrs / 24);
    let weeks = Math.round(days / 7);
    let years = Math.round(days / 365);
    if (mins < 1) return "Just now";
    else if (mins < 60) return `${mins} min${getPlural(mins)}`;
    else if (hrs >= 1 && hrs < 24) return `${hrs} hour${getPlural(hrs)}`;
    else if (hrs >= 24 && days < 7) return `${days} day${getPlural(days)}`;
    else if (days >= 7 && days < 365) return `${weeks} week${getPlural(weeks)}`;
    else if (days >= 365) return `${years} year${getPlural(years)}`;
    return "";
  }

  function getPlural(val) {
    if (val === 1) return "";
    return "s";
  }

  function reCopy() {
    chrome.runtime
      .sendMessage({ msg: "COPY", ind: id })
      .then((response) => {
        setHistory(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <li
      id={id}
      onClick={reCopy}
      className={`p-1 bg-gray-800 hover:bg-green-800 rounded-lg my-2 py-2 px-2`}
    >
      <div className={"flex flex-row w-full h-full items-center justify-start"}>
        <span className={"w-1/4 mr-2 bg-green-500 py-1 text-center rounded-lg"}>
          {timeShortString()}
        </span>
        <span className={"w-2/3 truncate"}>{content}</span>
      </div>
    </li>
  );
}
