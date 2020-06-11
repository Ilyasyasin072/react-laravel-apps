import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from '../containers/landing/landing';
import Inventory from '../containers/inventory/inventory';
import Transactions from '../containers/transactions/transactions';
class RouterLink extends Component {
    render() {
        return (
            <Switch>
                <Route path="/landing" component={Landing} />
                <Route path="/inventory" component={Inventory} />
                <Route path="/transaction" component={Transactions}/>
            </Switch>
        );
    }
}

export default RouterLink;