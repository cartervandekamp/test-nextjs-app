import React from "react";

const Article = ({ title, author, image, content }) => {
  return (
    <div className="article">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>{content}</p>
    </div>
  );
};

export default Article;
