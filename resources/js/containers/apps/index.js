import React from 'react';
import ReactDOM from 'react-dom';
import RouterLink from '../../config/routerlink';
import { BrowserRouter as Routes, Router } from 'react-router-dom';
import Header from '../layouts/header/header';
import history from '../../config/history';
import Login from '../auth/Login';
import { LandingProvider } from '../../context/LandingContext';
function App() {
    return (
        <LandingProvider>
            <Router history={history}>
                <Routes >
                    <Header />
                    <RouterLink />
                </Routes>
            </Router>
        </LandingProvider>
    );
}

export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
