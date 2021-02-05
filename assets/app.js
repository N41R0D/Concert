import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './component/menu-component/Menu';
import SearchBar from './component/searchbar-component/SearchBar';
import Footer from './component/footer-component/Footer';

import Accueil from './page/page-accueil/accueil';
import AdminConcerts from './page/admin/page-concerts/concerts';
import Concert from './page/admin/page-concerts/concert';

import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import Programmation from './page/page-programmation/programmation';

function App() {
    return(
        <HashRouter>
            <Menu/>
            <SearchBar/>
            <Switch>
                <Route exact path="/" component={Accueil}/>
                <Route path="/concerts/1" component={Concert}/>
                <Route path="/admin/concert" component={AdminConcerts}/>
                <Route path="/scheduled" component={Programmation}/>
            </Switch>
            <Footer />
        </HashRouter>
    )
}

ReactDOM.render(
        <HashRouter>
            <App />
        </HashRouter>,
    document.getElementById("root")
);