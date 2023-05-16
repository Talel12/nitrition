import React, { useEffect, useState } from "react";
import { calculateRange, sliceData } from "../../utils/table-pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  createArticle,
  deleteArticle,
} from "../../../../redux/articleSlice/articleSlice";
import "./article.css";

const Articles = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [article, setarticle] = useState([]);
  const dispatch = useDispatch();
  const [newArticle, setNewArticle] = useState({});
  const handleChange = (e) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };

  const articlesList = useSelector((state) => state?.articles?.Articles);

  useEffect(() => {
    setPagination(calculateRange(articlesList, 5));
    setarticle(sliceData(articlesList, page, 5));
  }, [articlesList, page]);

  // Search
  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = articlesList.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.LastName.toLowerCase().includes(search.toLowerCase())
      );
      setarticle(search_results);
    } else {
      handleChangePage(1);
    }
  };

  // Change Page
  const handleChangePage = (new_page) => {
    setPage(new_page);
    setarticle(sliceData(articlesList, new_page, 5));
  };

  const refresh = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createArticle(newArticle));
    setTimeout(() => {
      refresh();
    }, 600);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="Article-Form">
        <h3>Nouveau Articles</h3>
        <div className="form">
          <input
            onChange={handleChange}
            type="text"
            name="img"
            placeholder="Image URL"
          />
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Titre de l'Article"
          />
          <textarea
            rows={4}
            cols={98}
            onChange={handleChange}
            type="text"
            name="body"
            placeholder="Contenu de l'Article"
            style={{
              padding: 10,
              borderRadius: 15,
              boxShadow: "0px 14px 9px -15px rgba(0, 0, 0, 0.25)",
              backgroundColor: "#f5f5f5",
              borderColor: "rgba(0, 0, 0, 0.3)",
            }}
          />
          <input
            onChange={handleChange}
            type="text"
            name="source"
            placeholder="Source"
          />

          <input
            type="submit"
            value={"Creer"}
            width={"50px"}
            style={{
              width: 150,
              minWidth: 150,
            }}
          />
        </div>
      </form>

      <div className="MedcineDash-content-container">
        <div className="MedcineDash-content-header">
          <h2>Articles</h2>
          <div className="MedcineDash-content-search">
            <input
              type="text"
              value={search}
              placeholder="Rechercher.."
              className="MedcineDash-content-input"
              onChange={(e) => handleSearch(e)}
            />
          </div>
        </div>

        <table>
          <thead>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITRE</th>
            <th>CONTENU</th>
            <th>SUPPRIMER</th>
          </thead>

          {article.length !== 0 ? (
            <tbody>
              {article.map((article, index) => (
                <tr key={index}>
                  <td>
                    <span>{index}</span>
                  </td>

                  <td>
                    <div>
                      <img
                        src={article.img}
                        className="AssistanteDash-content-avatar"
                        alt={article.name + " " + article.LastName}
                      />
                      <span>
                        {article.name} {article.LastName}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span>{article.title}</span>
                  </td>
                  <td>
                    <span>{article.body}</span>
                  </td>

                  <td>
                    <span>
                      <button
                        className="supp-grad"
                        onClick={() => {
                          dispatch(deleteArticle(article._id));
                          setTimeout(() => {
                            refresh();
                          }, 1000);
                        }}
                      >
                        Supprimer
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>

        {article.length !== 0 ? (
          <div className="MedcineDash-content-footer">
            {pagination.map((item, index) => (
              <span
                key={index}
                className={item === page ? "active-pagination" : "pagination"}
                onClick={() => handleChangePage(item)}
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className="MedcineDash-content-footer">
            <span className="empty-table">No data</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
