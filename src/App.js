import './App.css';
import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Main} from "./components/Main";
import {Images} from "./components/Images";
import {useSelector} from "react-redux";
function App() {
    const theme = useSelector(store => store.theme);
    return (
        <div className="App" style={theme === "light" ? {backgroundColor: "white"} : {backgroundColor: "#202124"}}>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Main/>}></Route>
                    <Route path="/search/:term" element={<Images/>}></Route>
                </Routes>
            </Router>
        </div>
  );
}

export default App;
