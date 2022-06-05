import './App.css';
import Registration from "./components/registration/Registration";
import Authorization from "./components/authorization/Authorization"
import Classroom from "./components/classroom/Classroom"
import History from './components/history/History';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Burgermenu from './components/burgermenu/Burgermenu';

const App = () => {
    const dispatch = useDispatch();
    const cash = useSelector( state => state.cash);

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    return (
        <div className="App">
                    <Routes>
                        <Route path="/" element={<Burgermenu />}/>
            <Route path="/history" element={<History />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/classroom" element={<Classroom />} />
        </Routes>
        </div>
    );
}

export default App;
