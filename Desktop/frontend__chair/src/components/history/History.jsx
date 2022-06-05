// компонент класса (школьного)
import React, { useState } from 'react';
import './History.css';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Burgermenu from "../../../src/components/burgermenu/Burgermenu";
import teacher__logo from './src/teacher__logo.svg'






const Classroom = () => {
    const desks = useSelector( state => state.desks);

    return (
        <div className='History'>
                <div class="history__header">
                <span>История</span>
                </div>
                        <div className='window' >
                                        
                                        <div class="teacher__card">
                                            <div className='logo' >
                                        <img src={teacher__logo} alt="" />
                                            </div>
                                            <div className='name' >
                                        <span>Александор Петровичь</span>
                                        <span>Иванов</span>
                                        <span>(какой-то педагог)</span>
                                            </div>
                                        </div>
                        </div>
            </div>
    );
}

export default Classroom;