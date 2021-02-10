import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './component/menu-component/Menu';
import SearchBar from './component/searchbar-component/SearchBar';
import Footer from './component/footer-component/Footer';

import Accueil from './page/page-accueil/accueil';
import Reservation from './page/page-reservation/reservation';
import Step2 from './page/page-reservation/reservation2';
import Step3 from './page/page-reservation/reservation3';
import Step4 from './page/page-reservation/reservation4';
import Step5 from './page/page-reservation/reservation5';
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
                <Route path="/reservation" component={Reservation}/>
                <Route path="/reservation-2" component={Step2}/>
                <Route path="/reservation-3" component={Step3}/>
                <Route path="/reservation-4" component={Step4}/>
                <Route path="/reservation-5" component={Step5}/>
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