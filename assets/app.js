import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/page-accueil/accueil';


/*const Body = (props) => {
    return <>
    <h1>{props.title}</h1>
    </>
}*/

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
