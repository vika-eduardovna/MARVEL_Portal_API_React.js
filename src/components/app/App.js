import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from "../Layout/Layout";
import MainPage from "../../pages/mainPage/MainPage";
import AppHeader from "../appHeader/AppHeader";
import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import SingleComic from "../singleComic/SingleComic";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';


const App = () => {

    const [selectedChar, setSelectedChar] = useState(null);
    const onCharSelected = id => setSelectedChar(id);

    return (
        <div className="app">
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<MainPage 
                            onCharSelected={onCharSelected}
                            charId={selectedChar}/>} />
                        <Route path='/comics' element={<ComicsList />} />
                    </Route>
                    
                   
                    
                </Routes>
           
        </div>
    )

}

{/* <CharList onCharSelected={onCharSelected} />

<CharInfo charId={selectedChar} /> */}

{/* <AppBanner/>
                <ComicsList/> */}

export default App;