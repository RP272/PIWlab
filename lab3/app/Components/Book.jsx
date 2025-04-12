export default ({ book }) => {
    return (
      <article>
        <div>Book name: {book.name}</div>
        <div>Cover: {book.cover}</div>
        <div>Number of pages:{book.numberOfPages}</div>
        <div>Author: {book.author}</div>
        <div>Description: {book.description}</div>
        <button>Edit</button>
        <button>Delete</button>
      </article>
    );
  };