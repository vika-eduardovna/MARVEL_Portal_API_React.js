import React, { useState } from 'react';
import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary'
import RandomChar from '../../components/randomChar/RandomChar';
import CharInfo from '../../components/charInfo/CharInfo';
import CharList from '../../components/charList/CharList';
import CharSearchForm from '../../components/CharSearchForm/charSearchForm';
import './mainPage.scss'

export default function MainPage() {

    const [selectedChar, setSelectedChar] = useState(null);
    const onCharSelected = id => setSelectedChar(id);

    return (
        <>
            <ErrorBoundary>
                <RandomChar />
            </ErrorBoundary>

            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected} />
                </ErrorBoundary>
                <div className="char_form">
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar} />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharSearchForm />
                    </ErrorBoundary>
                </div>
            </div>
        </>
    )
}
