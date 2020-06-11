import React from 'react';
import ReactDOM from 'react-dom';
import RouterLink from '../../config/routerlink';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from '../layouts/header/header';
function App() {
    return (
        <Router>
            <Header/>
            <RouterLink/>
        </Router>
    );
}

export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
