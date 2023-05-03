import React from "react";
import ArticleCard from "../../components/Articles/ArticleCard";

const PatientArticles = () => {
  const articles = [
    {
      title: "Article 1 Food",
      content:
        "This is a test article that demonstrates   how to create an article from a list of articles that have  a title",
      img: "https://pages.astrahealthcare.in/wp-content/uploads/2021/12/Nutritionist.jpg",
    },
    {
        title: "Article 2 Food",
        content:
          "This is a test article that demonstrates   how to create an article from a list of articles that have  a title",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77-MlA41W_fc40Y6g78AJf_AaQBLrgj4ViA&usqp=CAU",
      },
      {
        title: "Article 3 Food",
        content:
          "This is a test article that demonstrates   how to create an article from a list of articles that have  a title",
        img: "https://im.rediff.com/getahead/2018/oct/08health1.jpg?w=670&h=900",
      },
      {
        title: "Article 1 Food",
        content:
          "This is a test article that demonstrates   how to create an article from a list of articles that have  a title",
        img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/2/GettyImages-1214221095.jpg.rend.hgtvcom.441.294.suffix/1612301517364.jpeg",
      },
      {
        title: "Article 1 Food",
        content:
          "This is a test article that demonstrates   how to create an article from a list of articles that have  a title",
        img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/2/GettyImages-1214221095.jpg.rend.hgtvcom.441.294.suffix/1612301517364.jpeg",
      },
      {
        title: "Article 1 Food",
        content:
          "This is a test article that demonstrates   how to create an article from a list of articles that have  a title",
        img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/2/GettyImages-1214221095.jpg.rend.hgtvcom.441.294.suffix/1612301517364.jpeg",
      },
  ];
  return (
    <div >
      <div style={{ padding: 20 }}>
        <h2>Blog Personnel</h2>
        <hr style={{ marginTop: 10, marginBottom: 30 }} />
        <div style={{display:"flex",flexWrap:"wrap",gap:"30px 5%",padding:10,justifyContent:"center"}}>
        {articles.map((article,i)=><><ArticleCard article={article}/></>)}
        </div>
      </div>
    </div>
  );
};

export default PatientArticles;
