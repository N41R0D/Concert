import './styles/app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/page-accueil/accueil';

import Footer from './component/footer-component/Footer';

ReactDOM.render(<>
    <App />
    <Footer />
    </>,
  document.getElementById('root')
);
