import { useHttp } from "../components/hooks/http.hook";

const useMarvelService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=e578e9ebbd211153e58abfe78c8518fc';
    const _baseOffset = 210;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter)
    }

    const getAllComics = async (offset = _baseOffset) => {
        const response = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return response.data.results.map(_transformComics)
    }

    const getSingleCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?&${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getComic = async (id) => {
		const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
	};

    const _transformCharacter = char => {
        return {
            id: char.id,
            name: char.name,
            description: char.description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    };

    const _transformComics = comic => {
        return {
            id: comic.id,
            title: comic.title,
            description: comic.description || 'There is no description',
            price: comic.prices[0].price ? `${comic.prices[0].price}$` : 'not available',
            image: comic.images.map(el => el.path + '.' + el.extension )[0],
            language: comic.textObjects[0]?.language || "en-us",
            pageCount: comic.pageCount ? `${comic.pageCount} pages` : 'No information about the number of pages'
        }
    }

    return { loading, error, getAllCharacters, getSingleCharacter, getAllComics, getComic, clearError }
}


export default useMarvelService;