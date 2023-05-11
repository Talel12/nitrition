import React from 'react'
import "./articleCard.css"

const ArticleCard = ({article}) => {
  return (
    <div style={{width:"40%",border:"1px solid gray",borderRadius:10,position:"relative",overflow:"hidden",padding:0}}>
        <div className='cardArticle'></div>
        <div style={{position:'absolute',bottom:0,padding:5,backgroundColor:"#33333399", width:"100%"}}>
            <h2 style={{color:"white",}}>{article.title}</h2>
        </div>
        <img style={{margin:0}} width={'100%'} height="100%" src={article.img} alt=''/>
    </div>
  )
}

export default ArticleCard