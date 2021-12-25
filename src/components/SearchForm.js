import {useState} from "react";
import {Col, Container, Form, FormControl, Row} from "react-bootstrap";
import './SearchForm.css';
import {useSelector} from "react-redux";
import {BiSearch} from "react-icons/bi";

export function SearchForm({handleSubmit}){
    const [searchEntry, setSearchEntry] = useState("");
    const theme = useSelector(store => store.theme);
    const updateSearchInput = e => {
        setSearchEntry(e.target.value);
    };
    return(
        <Container>
            <Form className={theme==="light" ? "" : "form-dark"} onSubmit={e => handleSubmit(e, searchEntry)}>
                <Row className="g-2">
                    <Col md>
                        <FormControl className="search-input" type="text" placeholder="Search..."
                                     value={searchEntry}
                                     onChange={updateSearchInput}/>
                    </Col>
                    <Col md>
                        <button className="search-btn" type="submit"><BiSearch className="search-btn-icon"/></button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}