import React, { useState } from 'react';

export default function Tour({id, name, info, image, price, removeTour}) {

    const [readmore, setReadMore] = useState(false)
    return (
        <article className="single-tour">
            <img src={image} alt={name} className="img"/>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <div className="tour-price">${price}</div>
                </div>
                <p>
                   {readmore ? info : info.slice(0, 200)}
                    <button className="info-btn" onClick={() => setReadMore(!readmore)}>{`${readmore ? "show less" : "read more"}`}</button>
                </p>
                <button className="delete-btn btn-block btn" onClick={() => {removeTour(id)}}>not interested</button>
            </footer>
            
        </article>
    )
}