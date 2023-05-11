import React, { useEffect, useState } from "react";
import MedcineDashHeader from "../../components/MedcineDashHeader/MedcineDashHeader";
import UpdateArticleModal from "../../components/UpdateUserModal";
import { calculateRange, sliceData } from "../../utils/table-pagination";
import { useDispatch, useSelector } from "react-redux";
// import { deletearticle } from "../../../../redux/userSlice/userSlice";
import { createArticle } from "../../../../redux/articleSlice/articleSlice";

const Articles = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [article, setarticle] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const dispatch = useDispatch();
  const [newArticle, setNewArticle] = useState({});
  const handleChange = (e) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };

  const articlesList = useSelector((state) => state?.articles?.Articles);

  useEffect(() => {
    setPagination(calculateRange(articlesList, 5));
    setarticle(sliceData(articlesList, page, 5));
  }, [articlesList]);

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

  // Handle the click event on the "Modifier" button
  const handleUpdateButtonClick = (user) => {
    setSelectedUser(user);
    setShowUpdateModal(true);
  };

  const refresh = () => {
    window.location.reload();
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
            <th>TITLE</th>
            <th>BODY</th>
            <th>UPDATE</th>
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
                        className="upd-grad"
                        onClick={() => {
                          handleUpdateButtonClick(article);
                        }}
                      >
                        Modifier
                      </button>
                    </span>
                  </td>
                  <td>
                    <span>
                      <button
                        className="supp-grad"
                        onClick={() => {
                          // dispatch(deletearticle(article._id));
                          refresh();
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
