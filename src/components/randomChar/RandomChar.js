import { useState, useEffect } from 'react';
import './randomChar.scss';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../../services/MarvelService';
import mjolnir from '../../resources/img/mjolnir.png';
import { ErrorMessage } from '../errorMessage/ErrorMessage';


const RandomChar = () => {

    const [char, setChar] = useState(null);
    const {loading, error, getSingleCharacter} = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [])

    const onCharLoaded = (char) => setChar(char);
    const updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
        getSingleCharacter(id)
            .then(onCharLoaded)
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
        <div className="randomchar">
            {errorMessage}
            {spinner}
            {content}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br />
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button onClick={updateChar} className="button button__main">
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
            </div>
        </div>
    )
}


const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki } = char;
    const isDescr = description ? description : 'Information about this character is missing or not found...'
    let imgStyle = { 'objectFit': 'cover' };
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = { 'objectFit': 'contain' };
    }


    return (
        <div className="randomchar__block">
            <img style={imgStyle} src={thumbnail} alt="Random character" className="randomchar__img" />
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">{isDescr}</p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar




