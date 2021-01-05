import React from "react";
import emojiData from "../emojipedia";
import Entry from "./Entry";
import Heading from "./Heading";

function createEntry(data) {
  return <Entry key={data.id} emoji={data.emoji} emojiName={data.name} emojiTxt={data.meaning} />;
}

function App() {
  return (
    <div>
      <Heading />
      <dl className="dictionary">{emojiData.map(createEntry)}</dl>
    </div>
  );
}

export default App;
