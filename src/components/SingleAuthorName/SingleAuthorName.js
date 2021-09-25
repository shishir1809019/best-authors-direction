import React from "react";

const SingleAuthorName = (props) => {
  // console.log(props.favoriteAuthor.author);
  const { author } = props.favoriteAuthor;
  return (
    <div>
      <h5>Name:{author.name}</h5>
    </div>
  );
};

export default SingleAuthorName;
