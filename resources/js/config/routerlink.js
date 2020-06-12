import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from '../containers/landing/landing';
import Inventory from '../containers/inventory/inventory';
import Transactions from '../containers/transactions/transactions';
import AddFormInventory from '../containers/inventory/add';
class RouterLink extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/inventory" component={Inventory} />
                <Route path="/transaction" component={Transactions}/>
                <Route path="/add-inventory" component={AddFormInventory}/>
            </Switch>
        );
    }
}

export default RouterLink;