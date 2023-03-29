import React from 'react'
import { Link } from 'react-router-dom'
import './comicItem.scss'

export default function ComicItem({ id, image, price, title }) {
    return (
        <>
            <li className="comics__item">
                <Link to={`/comics/${id}`}>
                    <img src={image} alt={title} className="comics__item-img" />
                    <div className="comics__item-name">{title}</div>
                    <div className="comics__item-price">{price}$</div>
                </Link>
            </li>
        </>
    )
}
