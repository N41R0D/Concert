import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './component/menu-component/Menu';
import SearchBar from './component/searchbar-component/SearchBar';
import Footer from './component/footer-component/Footer';

import Accueil from './page/page-accueil/accueil';
import Reservation from './page/page-reservation/reservation';
import AdminConcerts from './page/admin/page-concerts/concerts';
import Concert from './page/admin/page-concerts/concert';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return(
        <BrowserRouter>
            <Menu/>
            <SearchBar/>
            <Switch>
                <Route exact path="/" component={Accueil}/>
                <Route path="/concerts/1" component={Concert}/>
                <Route path="/admin/concert" component={AdminConcerts}/>
                <Route path="/reservation" component={Reservation}/>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    document.getElementById("root")
);