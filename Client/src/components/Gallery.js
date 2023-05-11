import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/Gallery.css";
import img1 from "../images/cabinet/img1.jpg";
import img2 from "../images/cabinet/img2.jpg";
import img3 from "../images/cabinet/img3.jpg";
import img4 from "../images/cabinet/img4.jpg";
import img5 from "../images/cabinet/img5.jpg";
import img6 from "../images/cabinet/img6.jpg";

const Gallery = () => {
  const images = [
    {
      original: img1 ,
    },
    {
      original: img2 ,
    },
    {
      original: img3 ,
    },
    {
      original: img4 ,
    },
    {
      original: img5 ,
    },
    {
      original: img6 ,
    },
  ];

  return (
    <>
      <div className="galleryContainer">
        <div className="gallery">
          <ImageGallery
            items={images}
            showBullets={true}
            showIndex={false}
            showThumbnails={true}
            lazyLoad={true}
            showPlayButton={false}
            autoPlay={true}
            showNav={false}
            showFullscreenButton={false}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
