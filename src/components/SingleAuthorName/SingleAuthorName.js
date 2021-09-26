import React from "react";

const SingleAuthorName = (props) => {
  // console.log(props.favoriteAuthor.author);
  const { author } = props.favoriteAuthor;
  return (
    <div>
      <h6>Name:{author.name}</h6>
    </div>
  );
};

export default SingleAuthorName;
