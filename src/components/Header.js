import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import './Header.css';
import { useSelector, useDispatch } from "react-redux";
import {getSearchResults} from "../api/api";
import {Link, useNavigate} from "react-router-dom";
import {SearchForm} from "./SearchForm";
import {BsSunFill, BsMoonStarsFill} from "react-icons/bs"

export function Header(){
    const theme = useSelector(store => store.theme);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLightTheme = theme === "light";
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
    return(
        <Navbar bg={isLightTheme ? "light" : "dark"} expand="lg" sticky="top" style={{zIndex:2}} className={isLightTheme ? "" : "nav-dark"}>
            <Container>
                <Link to="/Instant" className={isLightTheme ? "light-theme navbar-brand" : "dark-theme navbar-brand"}>Instant</Link>
                <NavbarCollapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link to="/Instant" className={isLightTheme ? "light-theme nav-link" : "dark-theme nav-link"}>Home</Link>
                    <SearchForm handleSubmit={handleSubmit}/>
                  </Nav>
                </NavbarCollapse>

                <div>
                    <button className="mode-btn" onClick={() => dispatch({type: 'toggle'})}>
                        {isLightTheme ? <BsSunFill style={{color:"#ffa200"}}/> : <BsMoonStarsFill style={{color:"#fde8d9"}}/>}
                    </button>
                </div>
            </Container>
        </Navbar>
    )
}