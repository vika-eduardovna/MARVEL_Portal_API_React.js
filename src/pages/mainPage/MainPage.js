import React from 'react';
import RandomChar from '../../components/randomChar/RandomChar';
import CharInfo from '../../components/charInfo/CharInfo';
import CharList from '../../components/charList/CharList';
import './mainPage.scss'

export default function MainPage({onCharSelected, selectedChar}) {
    return (
        <>
            <RandomChar />

            <div className="char__content">
                <CharList onCharSelected={onCharSelected} />

                <CharInfo charId={selectedChar} />

            </div>
        </>
    )
}
