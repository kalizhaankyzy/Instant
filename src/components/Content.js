import "./Content.css";
import { Container } from "react-bootstrap";
import {HiArrowDown} from 'react-icons/hi';
import {useState} from "react";
import {ImageModal} from "./ImageModal";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

export function Content({images}){
    const [modalImgUrl, setModalImgUrl] = useState("");
    const [modalImgUsername, setModalImgUsername] = useState("");
    const [modalImgDescription, setModalImgDescription] = useState("");
    const theme = useSelector(store => store.theme);
    const params = useParams();

    const hideImgModal =()=>{
        setModalImgUrl("");
        setModalImgUsername("");
    }
    return(
        <Container>
            {modalImgUrl && <ImageModal src={modalImgUrl} username={modalImgUsername} description={modalImgDescription} hideImgModal={hideImgModal}/>}
            {params.term ? <div className={theme==="light" ? "term" : "term dark-term"}>
                <h3>{params.term}</h3>
            </div> : null}
            <div className="gallery">
                <div className="photo-grid">
                    {images.length >0 && images.map((res)=>
                        <div className="img-container" key={res.id} style={res.height >= res.width ? {gridRow: "auto/span 2"} :  null}>
                            <img src={res.urls.regular}
                                 onClick={(e) => {
                                     setModalImgUrl(e.target.src);
                                     setModalImgUsername(e.target.alt);
                                     setModalImgDescription(res.description);
                                 }}
                                 alt={res.user.username}/>
                            <div>
                                <p>{res.user.name}</p>
                                <a href={res.urls.regular} target="_blank" rel="noreferrer noopener" className={theme==="light" ? "download-btn" : "download-btn dark-download-btn"}> <HiArrowDown/> </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    )
}