import {useSelector} from "react-redux";
import {Content} from "./Content";
import {Navigate} from "react-router-dom";

export function Images(){
    const images = useSelector(state => state.images);
    return(
        <>
            {images.length > 0 ?
                <Content images={images}></Content>
                : <Navigate to={"/"}/>
            }
        </>
    )
}