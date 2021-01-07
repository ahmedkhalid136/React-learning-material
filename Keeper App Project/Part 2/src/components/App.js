import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import data from "../notes";

function App() {
  return (
    <div>
      <Header />
      <div>
        {data.map((data) => {
          return (
            <Note heading={data.title} key={data.key} content={data.content} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
