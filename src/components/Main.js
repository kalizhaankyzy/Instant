import {Content} from "./Content";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getImagesMainPage, getRandomImage, getSearchResults} from "../api/api";
import {SearchForm} from "./SearchForm";
import {useNavigate} from "react-router-dom";
import './Main.css';

export function Main(){
    const images = useSelector(state => state.images);
    const [mainImage, setMainImage] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userId = 1;

    useEffect(()=>{
        getRandomImage().then((
            res => setMainImage(res)
        ));
        getImagesMainPage().then((
            response => dispatch({
                type: "GET_NEW_LIST",
                payload: response
            })
        ));
    },[userId])

    const handleSubmit = (e, searchInput) => {
        e.preventDefault();
        getSearchResults(searchInput).then((
            res => {
                dispatch({
                    type: "GET_NEW_LIST",
                    payload: res.results
                });
            }
        ))
        e.currentTarget.reset();
        let url = `/search/${searchInput}`;
        navigate(url);
    };

    return (
        <>
            <div className="main" style={mainImage ? {backgroundImage:'url(' + mainImage.urls.regular + ')'} :null}>
                <div className="search-form">
                    <SearchForm handleSubmit={handleSubmit}/>
                </div>
                {mainImage && <div className="info">
                    {mainImage.user.name}
                </div>}
            </div>
            <Content images={images}/>
        </>
    )
}