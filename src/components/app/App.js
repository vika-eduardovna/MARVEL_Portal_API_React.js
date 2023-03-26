import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import SingleComic from "../singleComic/SingleComic";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import ErrorBoundary from '../errorBoundary/ErrorBoundary'

const App = () => {

    const [selectedChar, setSelectedChar] = useState(null);
    const onCharSelected = id => setSelectedChar(id);

    return (
        <div className="app">
            <AppHeader />
            <main>
                <AppBanner/>
                <ComicsList/>
                {/* <ErrorBoundary>
                    <RandomChar />
                </ErrorBoundary>
                <div className="char__content">
                    <CharList onCharSelected={onCharSelected} />
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar} />
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision" /> */}
            </main>
        </div>
    )

}

export default App;