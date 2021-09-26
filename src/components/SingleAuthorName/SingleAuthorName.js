import React from "react";
import "./SingleAuthor.css";

const SingleAuthorName = (props) => {
  // console.log(props.favoriteAuthor.author);
  const { author } = props.favoriteAuthor;
  return (
    <div className="d-flex align-items-center single-author mb-1">
      <img src={author.url} alt="" style={{ width: "50px" }} />
      <h6>Name:{author.name}</h6>
    </div>
  );
};

export default SingleAuthorName;
