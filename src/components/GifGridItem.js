import React from 'react'

// export const GifGridItem = (img) => {
export const GifGridItem = ({ id, title, url }) => {

    //console.log(id, title, url);

    return (
        //animaciones de animate.css (ver index.html)
        <div className="card animate__animated animate__bounce">
            {/* {img.title} */}
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
