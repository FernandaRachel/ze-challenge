import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import MainPage from './pages/main-page/main-page';

export default props => (
    <HashRouter>
        <div>
            {/* <Route path='/products' component={Products} /> */}
            <Route path='/' exact component={MainPage} />
        </div>
    </HashRouter>
)