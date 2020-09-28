import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import './index.css';
import Routes from './routes';
import Footer from './shared/footer/footer';
import Header from './shared/header/header';
require("babel-core/register");
require("babel-polyfill");

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Routes />
                <Footer />
            </div>
            // <div>Hello World</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
