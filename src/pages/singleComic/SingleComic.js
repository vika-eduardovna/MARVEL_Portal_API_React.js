import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import Spinner from '../../components/spinner/Spinner';
import useMarvelService from '../../services/MarvelService';
import { ErrorMessage } from '../../components/errorMessage/ErrorMessage';
import './singleComic.scss';


const SingleComic = () => {
    const { comic_id } = useParams();
    const [comic, setComic] = useState([]);
    const { loading, error, getComic, clearError } = useMarvelService();
    const { title, image, price, language, description, pageCount } = comic;

    useEffect(() => {
        updateComic()
    }, [comic_id])

    const updateComic = () => {
        clearError();
        getComic(comic_id)
            .then(onComicLoaded)
    }

    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {
                !(loading || error || !comic)
                    ? <div className="single-comic">
                        <img src={image} alt={title} className="single-comic__img" />
                        <div className="single-comic__info">
                            <h2 className="single-comic__name">{title}</h2>
                            <p className="single-comic__descr">{description}</p>
                            <p className="single-comic__descr">{pageCount}</p>
                            <p className="single-comic__descr">Language: {language}</p>
                            <div className="single-comic__price">Price: {price}</div>
                        </div>
                        <Link to="/comics" className="single-comic__back">Back to all</Link>
                    </div>
                    : null
            }
        </>
    )
}

export default SingleComic;