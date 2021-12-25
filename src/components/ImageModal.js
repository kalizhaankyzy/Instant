import "./ImageModal.css";
import {MdClose} from "react-icons/md";
import {useSelector} from "react-redux";
import {useState} from "react";

export function ImageModal({src, username, description, hideImgModal}){
    const link = `https://unsplash.com/@${username}`;
    const theme = useSelector(store => store.theme);
    const [zoomIn, setZoomIn] = useState(false);
    console.log(zoomIn)
    return(
        <>
            <button className="close-btn" onClick={hideImgModal}><MdClose className="icon"/></button>
            <div className={theme==="light" ?"popUpWindow":"popUpWindow darkPopUpWindow"}>

                <div className="popUp">
                    <div className="author-info">
                        <div>
                            <p>{description}</p>
                            <a href={link} target="_blank" rel="noreferrer noopener">{username}</a>
                        </div>
                        <a href={src} target="_blank" rel="noreferrer noopener" className={theme==="light" ? "download-btn" : "download-btn dark-download-btn"}> Download </a>
                    </div>
                    <div className={zoomIn ? "zoom-in" : "img"}>
                        <img src={src} alt={description} onClick={()=> setZoomIn(!zoomIn)}/>
                    </div>
                </div>
            </div>
        </>
    )
}