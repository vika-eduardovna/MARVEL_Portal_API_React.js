import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from "../Layout/Layout";
import Spinner from '../spinner/Spinner';

const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));
const MainPage = lazy(() => import('../../pages/mainPage/MainPage'));
const SingleComic = lazy(() => import('../../pages/singleComic/SingleComic'));
const ComicsList = lazy(() => import('../comicsList/ComicsList'));



const App = () => {
    return (
        <div className="app">
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route path='/comics' element={<ComicsList />} />
                        <Route path='/comics/:comic_id' element={<SingleComic />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;