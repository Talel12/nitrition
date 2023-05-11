import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ArticleCard from "../../components/Articles/ArticleCard";

const PatientArticles = () => {
  const location = useLocation();
  const path = location.pathname;
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
              <Link
                style={{ width: "40%", cursor: "pointer" }}
                to={
                  path.toLowerCase().includes("assistant")
                    ? `/assistantedash/blog/${article._id}`
                    : `/patientdash/articles/${article._id}`
                }
                state={article}
              >
                <ArticleCard article={article} />
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientArticles;
