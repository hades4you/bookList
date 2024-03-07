import React from "react";
import ReactDOM from "react-dom/client";

const Books = [
  {
    image: "./images/meditations.jpg",
    title: "Meditations",
    author: "Marcus Aureilus",
  },
  {
    image: "./images/lawsOfPower.jpg",
    title: "48 Laws Of Power",
    author: "Robert Greene",
  },
  {
    image: "./images/theRichestManInBabylon.jpg",
    title: "The Richest Man In Babylon",
    author: "George S. Clason",
  },
];

const Booklist = () =>
  Books.map((element) => (
    <>
      <Book
        image={element.image}
        title={element.title}
        author={element.author}
      />
    </>
  ));

const Book = (props) => {
  const { image, title, author } = props;
  return (
    <>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{author}</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
