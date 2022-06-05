import './Burgermenu.css'
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Authorization from '../../../src/components/authorization/Authorization';
import Registration from '../../../src/components/registration/Registration';
import History from '../../../src/components/history/History';
import Classroom from '../../../src/components/classroom/Classroom';

//icons svg
import Back from './src/img/Arrow.svg'
import HistoryIcon from './src/img/History.svg'
import Chair from './src/img/Chair.svg'
import AddMember from './src/img/AddMember.svg'
import Out from './src/img/Out.svg'




const Burgermenu =()=>{
    const [show, setShow] = useState(false)
    return(
        <>
        <div className='Burgermenu'>
         <div onClick={() => setShow(!show)} class="menu__button">
		            <span></span>
		            <span></span>
		            <span></span>
	            </div>
                {show && <div class="burger__menu">
                        <span>112 Аудитория</span>
                        <span>Все хорошо</span>
                        <div class="section__menu">
                        <Link to='/classroom'>
                        <img width="30" height="30" src={Back}/>
                        <span>Вернуться в класс</span>
                        </Link>
                    </div>
                        <div class="section__menu">
                        <Link to='/history'>
                        <img width="30" height="30" src={HistoryIcon}/>
                        <span>Посмотреть историю</span> 
                        </Link>
                    </div>
                    <div class="section__menu">
                    <a href="">
                        <img width="30" height="30" src={Chair}/>
                        <span>Расстановка стульев</span>
                        </a>
                    </div>
                    <div class="section__menu">
                        <Link to="/registration">
                        <img width="30" height="30" src={AddMember}/>
                        <span>Добавить учеников</span>
                        </Link>
                    </div>
                    <div class="section__menu">
                        <Link to="/authorization">
                        <img width="30" height="30" src={Out}/>
                        <span>Выйти</span>
                        </Link>
                    </div>
                </div>}
        </div>
        </>
    )
}

export default Burgermenu;