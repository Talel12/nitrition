import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createArticle } from "../../../../redux/articleSlice/articleSlice";

const Articles = () => {
  const dispatch = useDispatch();
  const [newArticle, setNewArticle] = useState({});
  const handleChange = (e) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createArticle(newArticle));
  };

  return (
    <div>
      <h3>Nouveau Articles</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="img"
          placeholder="Image"
        />
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Titre de l'Article"
        />
        <input
          onChange={handleChange}
          type="text"
          name="body"
          placeholder="Contenu de l'Article"
        />
        <input
          onChange={handleChange}
          type="text"
          name="source"
          placeholder="Source"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Articles;
