export const Book = (props) => {
  const { image, title, author } = props.element;
  const bookEvent = () => console.log(title);
  return (
    <div className="book" onClick={bookEvent}>
      <p id="indexNumber">{props.index}</p>
      <img src={image} alt={title} />
      <p className="title">{title}</p>
      <p className="author">{author}</p>
    </div>
  );
};
