import React from "react";

const ImageList = (props) => {
    const images = props.images.map(image => {
        return <img className="perImage" src={image.webformatURL} key={image.id}></img>
    });
    return(
        <div className="imageList">
            {images}
        </div>
    )
}

export default ImageList;