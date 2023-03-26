import React, { useState, useEffect } from 'react';
import { ErrorMessage } from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../../services/MarvelService';
import ComicItem from '../comicItem/ComicItem';
import './comicsList.scss';

const ComicsList = () => {
    const [comic, setComic] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [comicEnded, setComicEnded] = useState(false);

    const { loading, error, getAllComics } = useMarvelService();
    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        getAllComics(offset)
            .then(onComicListLoaded)
    }

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    const onComicListLoaded = (newComicList) => {
        let ended = false;
        if (newComicList.length < 9) {
            ended = true;
        }

        setComic(comic => [...comic, ...newComicList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setComicEnded(comicEnded => ended);
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="comics__list">
            <ul className="comics__grid">
            {errorMessage}
            {spinner}
                {
                    comic.map((el, i) => <ComicItem key={i} {...el} />)
                }

            </ul>
            <button
                className="button button__main button__long"
                // disabled={newItemLoading}
                // style={{ 'display': comicEnded ? 'none' : 'block' }}
                onClick={() => onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;