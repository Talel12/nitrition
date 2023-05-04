import React from "react";
import { useSelector } from "react-redux";
import ArticleCard from "../../components/Articles/ArticleCard";

const PatientArticles = () => {
  const articles = useSelector((store) => store.articles.Articles);
  return (
    <div>
      <div style={{ padding: 20 }}>
        <h2>Blog Personnel</h2>
        <hr style={{ marginTop: 10, marginBottom: 30 }} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px 5%",
            padding: 10,
            justifyContent: "center",
          }}
        >
          {articles.map((article, i) => (
            <>
              <ArticleCard article={article} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientArticles;
