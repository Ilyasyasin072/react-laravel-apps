import React from 'react';
import ReactDOM from 'react-dom';
import RouterLink from '../../config/routerlink';
import {BrowserRouter as Routes , Router} from 'react-router-dom';
import Header from '../layouts/header/header';
import history from '../../config/history';
function App() {
    return (
        <Router history={history}>
            <Routes >
                <Header/>
                <RouterLink/>
            </Routes>
        </Router>
    );
}

export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
