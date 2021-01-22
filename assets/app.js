import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './component/Menu/Menu'

const programmation = [
    {id: 1, name :"Tous les événements"},
    {id: 2, name : "Aix-en-Provence"},
    {id: 3, name : "Bourges"},
    {id: 4, name : "Cannes"},
    {id: 5, name :"Dunkerque"},
    {id: 6, name :"Echirolles"},
    {id: 7, name :"Comment réserver ?"}];

const restauration = [
    {id: 1, name :"Présentation"},
    {id : 2, name : "Réserver"}
]

const parking = [
    {id: 1, name :"Présentation"},
    {id : 2, name : "Réserver"}
]

const privatisation = [
    {id: 1, name :"Présentation"},
    {id : 2, name : "Réserver"}
]

const infos = [
    {id: 1, name :"Comment venir ?"},
    {id : 2, name : "FAQ"}
]

const navigations = [
    {id: 1, name : "Programmation", list : programmation }, 
    {id: 2, name : "Restauration", list: restauration }, 
    {id: 3, name : "Parking", list: parking }, 
    {id: 4, name : "Privatisation", list: parking },
    {id: 5, name : "Actualités", list: [] },
    {id: 6, name : "Infos pratiques" , list:infos},
    {id: 7, name : "Contact", list: [] }
]

const Body = (props) => {
    return <>
    <h1>{props.title}</h1>
    </>
}

const App = () => {
    return <>
    <Menu infos={navigations} />
    <Body title="1, 2, 3" />
    </>;
}



const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);