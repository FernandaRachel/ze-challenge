import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import Products from './pages/products/products';

export default props => (
    <HashRouter>
        <Route path='/products' component={Products} />
        <Route path='/' exact component={MainPage} />
    </HashRouter>
)