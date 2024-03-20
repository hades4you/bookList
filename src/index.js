import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";

const Books = [
  {
    image: "./images/meditations.jpg",
    title: "Meditations",
    author: "Marcus Aureilus",
    id: 1,
  },
  {
    image: "./images/lawsOfPower.jpg",
    title: "48 Laws Of Power",
    author: "Robert Greene",
    id: 2,
  },
  {
    image: "./images/theRichestManInBabylon.jpg",
    title: "The Richest Man In Babylon",
    author: "George S. Clason",
    id: 3,
  },
  {
    image: "./images/atomicHabits.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    id: 4,
  },
];

const Booklist = () => (
  <>
    <p id="thetitle">My Book List</p>
    <EventTesting />
    <div className="booklist">
      {Books.map((element) => {
        return <Book element={element} key={element.id} />;
      })}
    </div>
  </>
);

const Book = (props) => {
  const { image, title, author } = props.element;
  return (
    <div className="book">
      <img src={image} alt={title} />
      <p className="title">{title}</p>
      <p className="author">{author}</p>
    </div>
  );
};

const EventTesting = () => {
  const fieldEvent = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const buttonEvent = () => alert("Button Clicked");

  const formEvent = (e) => e.preventDefault;
  console.log("form submitted");

  return (
    <>
      <form onSubmit={formEvent}>
        <input type="text" name="textfield" onChange={fieldEvent} />
      </form>
      <button onClick={buttonEvent}>I'm a button</button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
