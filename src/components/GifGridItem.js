import React from 'react'


//export const GifGridItem = ( {image:{title}} ) => {

//    console.log(title);
//    return (
//        <div>
//            {title}
//        </div>
//    )
//}

export const GifGridItem = ( {id, title, url} ) => {

    return (
        <div className="card animate__animated animate__fadeInRight">
            <img src={url} alt={title} />
            <p><i>{title}</i></p>
        </div>
    )
}
