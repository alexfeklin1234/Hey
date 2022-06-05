import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const defaultState = {
    currentTeacher:{
        userId:1111
    },
    desks: [
        [
            [
                {
                    chairId: "9999",
                    seatedAtChair: [
                        {
                            userId: 2222,       
                        }
                    ]
                },
                {
                    chairId: "8888",
                    seatedAtChair: [
                        {
                            userId: 3333,       
                        }
                    ]
                }
            ],
            
        ],
        [
            [
                {
                    chairId: "9999",
                    seatedAtChair: [
                        {
                            userId: 2222,       
                        }
                    ]
                },
                {
                    chairId: "8888",
                    seatedAtChair: [
                        {
                            userId: 3333,       
                        }
                    ]
                }
            ],
            [
                [
                    {
                        chairId: "9999",
                        seatedAtChair: [
                            {
                                userId: 2222,       
                            }
                        ]
                    },
                    {
                        chairId: "8888",
                        seatedAtChair: [
                            {
                                userId: 3333,       
                            }
                        ]
                    }
                ],   
            ]
        ]
    ],
    
    cash: 0,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return {...state, cash: state.cash + action.payload};
        case "ADD_CASH":
            return {...state, cash: state.cash - action.payload};
            case "ADD_CASH":
            return {...state, cash: state.cash - action.payload};

        default:
            return state
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
		<BrowserRouter>
            <App />
		</BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
