import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';


const Body = (props) => {
    return <>
    <h1>{props.title}</h1>
    </>
}

const App = () => {
    return <>
    <Body title="1, 2, 3" />
    </>;
}



const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);