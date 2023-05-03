import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/Gallery.css";

const Gallery = () => {
    const images = [
        {
            original: "https://lh3.googleusercontent.com/p/AF1QipNleoEV6bXXIyBKwljnjsLsuumnJGfQAqXDS6oA=s680-w680-h510"
        },
        {
            original: "https://lh3.googleusercontent.com/p/AF1QipPm2plWxbd6KwwWZR7yKCIV8isY2UOZwVYlTkkc=s680-w680-h510"
        },
        {
            original: "https://lh3.googleusercontent.com/p/AF1QipMc8ZVdP_MIOJd8nUv39bZ9JNoLN5i9yduyJA9p=s680-w680-h510",
        },
        {
            original: "https://lh3.googleusercontent.com/p/AF1QipPm2plWxbd6KwwWZR7yKCIV8isY2UOZwVYlTkkc=s680-w680-h510",
        },
        {
            original: "https://lh3.googleusercontent.com/p/AF1QipMPZezB0-5rKGWPXwPwkd3Tib59-qqn0pid-MUj=s680-w680-h510",
        },
        {
            original: "https://lh3.googleusercontent.com/p/AF1QipNBYHK1ZOdV-qzaL54Idti14-lYAegJ5JEA-Xbv=s680-w680-h510",
        },
  
    ];

    return (
        <>

            <div className='galleryContainer'>
            <div className='gallery'>
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
    )
}

export default Gallery