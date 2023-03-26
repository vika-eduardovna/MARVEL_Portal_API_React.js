import React from 'react'
import './comicItem.scss'

export default function ComicItem({image, price, title}) {
    return (
        <>
            <li className="comics__item">
                <a href="#">
                    <img src={image} alt={title} className="comics__item-img" />
                    <div className="comics__item-name">{title}</div>
                    <div className="comics__item-price">{price}$</div>
                </a>
            </li>
        </>
    )
}
