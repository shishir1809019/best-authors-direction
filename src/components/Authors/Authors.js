import React, { useEffect, useState } from "react";
import Author from "../Author/Author";
import Cart from "../Cart/Cart";
import SingleAuthorName from "../SingleAuthorName/SingleAuthorName";
import "./Authors.css";

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
    <div className="row mt-3">
      <div className="col-md-9">
        <div className="row ">
          {authors.map((author) => (
            <Author
              handleFavoriteAuthor={handleFavoriteAuthor}
              author={author}
              key={author._id}
            ></Author>
          ))}
        </div>
      </div>
      <div className="col-md-3 b-1 ">
        <div className="card sticky">
          <div className="card-body ">
            <h4 className="text-center font-weight-bold">Author Cart</h4> <br />
            <h5 className="card-title">
              Favorite authors: {favoriteAuthors.length}
            </h5>
            <h6 className="card-subtitle mb-2 ">
              <Cart favoriteAuthors={favoriteAuthors}></Cart> <br />
              {favoriteAuthors.map((favoriteAuthor) => (
                <SingleAuthorName
                  key={favoriteAuthor.author.name}
                  favoriteAuthor={favoriteAuthor}
                ></SingleAuthorName>
              ))}
              <button className="btn btn-warning mt-2">
                <i class="fas fa-handshake"></i> Meet with them
              </button>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
