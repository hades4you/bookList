import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";

import { Books } from "./Books";
import { Book } from "./Book";

const Booklist = () => {
  return (
    <>
      <p id="thetitle">My Book List</p>
      <div className="booklist">
        {Books.map((element, index) => {
          return (
            <Book element={element} key={element.id} index={`#${index + 1}`} />
          );
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
