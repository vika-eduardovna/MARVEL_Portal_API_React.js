import { Route, Routes } from 'react-router-dom';
import Layout from "../Layout/Layout";
import MainPage from "../../pages/mainPage/MainPage";
import ComicsList from "../comicsList/ComicsList";
import NotFound from '../../pages/NotFound/NotFound';



const App = () => {
    return (
        <div className="app">
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route path='/comics' element={<ComicsList />} />
                        <Route path='*' element={<NotFound/>}/>
                    </Route>     
                </Routes>
        </div>
    )
}

export default App;