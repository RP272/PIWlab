export default ({ book }) => {
    return (
      <article>
        <span>
            <span>Book name: {book.name}</span>
            <span>Cover: {book.cover}</span>
            <span>Number of pages:{book.numberOfPages}</span>
            <span>Author: {book.author}</span>
            <span>Description: {book.description}</span>
        </span>
      </article>
    );
  };