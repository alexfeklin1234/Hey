// компонент класса (школьного)
import React, { useState } from 'react';
import './Classroom.css';
import DeskButtonGroup from './components/deskButtonGroup/DeskButtonGroup'
import { useSelector } from 'react-redux';
import logo from './src/img/logo1.png';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Burgermenu from "../../../src/components/burgermenu/Burgermenu";




const Classroom = () => {
    const desks = useSelector( state => state.desks);

    return (
        <div className='Classroom'>
            <div class="Registration__header">
                <span>Класс</span>
                </div>
            <div className="bounding_container">
                <main className='Classroom__main'>
                    <div class="Classroom__teacher__card">
                    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.75 75.5C6.75 75.5 0.5 75.5 0.5 69.25C0.5 63 6.75 44.25 38 44.25C69.25 44.25 75.5 63 75.5 69.25C75.5 75.5 69.25 75.5 69.25 75.5H6.75ZM38 38C42.9728 38 47.7419 36.0246 51.2583 32.5083C54.7746 28.9919 56.75 24.2228 56.75 19.25C56.75 14.2772 54.7746 9.50806 51.2583 5.99175C47.7419 2.47544 42.9728 0.5 38 0.5C33.0272 0.5 28.2581 2.47544 24.7417 5.99175C21.2254 9.50806 19.25 14.2772 19.25 19.25C19.25 24.2228 21.2254 28.9919 24.7417 32.5083C28.2581 36.0246 33.0272 38 38 38Z"
            fill="#026537" />
    </svg>
    <div class="Classroom__teacher__name">
                    <span>Елена Александровна</span>
                    <span>Жукова</span>
                    <span>Учитель Русского Языка</span>
                    </div>
                    </div>
                    {desks.map( (row, rowIndex) => {
                        
                        return(
                            <div className={"Classroom__row-" + String(rowIndex + 1)}>
                                {
                                    row.map(
                                        (desk, deskIndex)=>{
                                            return( <DeskButtonGroup row={rowIndex + 1} desk={deskIndex + 1} payload={desk}/>)
                                        }
                                    )
                                }
                                {/* <DeskButtonGroup row={rowIndex + 1} payload={row} />  */}
                                {/* {
                                    row.map((desk, deskIndex) => {
                                        console.log(desk);
                                        return( <DeskButtonGroup row={rowIndex + 1} desk={deskIndex + 1} payload={desk} /> )
                                    })
                                } */}
                            </div>
                        )
                        
                    })}
                    {/* <DeskButtonGroup /> */}
                    <div class="missing__container">
                   <p>Не за партой</p> 
                    <ul>
                    <li>Василий Петрович</li>
                    <li>Андрей Кораблев</li>
                    </ul>
                    
                    </div>
                </main>
                    <div class="footer">Комплекс по формированию правильной осанки и контроля прилежания у детей Кванториум Челябинск
                    <br></br>
                    <img src={logo}></img>
                    </div>
            </div>
        </div>
    );
}

export default Classroom;