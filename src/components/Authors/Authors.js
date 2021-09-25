import React, { useEffect, useState } from "react";
import Author from "../Author/Author";
import Cart from "../Cart/Cart";
import SingleAuthorName from "../SingleAuthorName/SingleAuthorName";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [favoriteAuthors, setFavoriteAuthors] = useState([]);

  const handleFavoriteAuthor = (author) => {
    const newFavoriteAuthors = [...favoriteAuthors, author];
    setFavoriteAuthors(newFavoriteAuthors);
  };
  useEffect(() => {
    fetch("authorDetails.json")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);
  return (
    <div className="row">
      <div className="col-md-9">
        <div className="row">
          {authors.map((author) => (
            <Author
              handleFavoriteAuthor={handleFavoriteAuthor}
              author={author}
            ></Author>
          ))}
        </div>
      </div>
      <div className="col-md-3">
        <h4>Favorite authors: {favoriteAuthors.length}</h4>
        <Cart favoriteAuthors={favoriteAuthors}></Cart>
        {favoriteAuthors.map((favoriteAuthor) => (
          <SingleAuthorName favoriteAuthor={favoriteAuthor}></SingleAuthorName>
        ))}
      </div>
    </div>
  );
};

export default Authors;
