import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Landing from '../containers/landing/landing';
import Inventory from '../containers/inventory/inventory';
import Transactions from '../containers/transactions/transactions';
import AddFormInventory from '../containers/inventory/add';
import Customers from '../containers/customers/Customers';
import Brands from '../containers/brands/Brands';
import Staffs from '../containers/staffs/Staffs';
import Orders from '../containers/orders/Orders';
import OrderItems from '../containers/order_items/OrderItems';
import Products from '../containers/products/Products';
import Stores from '../containers/stores/Stores';
import Stocks from '../containers/stocks/Stocks';
import Login from '../containers/auth/Login';
class RouterLink extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/inventory" component={Inventory} />
                <Route path="/transaction" component={Transactions} />
                <Route path="/add-inventory" component={AddFormInventory} />
                <Route path="/customers" component={Customers} />
                <Route path="/brands" component={Brands} />
                <Route path="/staffs" component={Staffs} />
                <Route path="/orders" component={Orders} />
                <Route path="/products" component={Products} />
                <Route path="/ordersitems" component={OrderItems} />
                <Route path="/stores" component={Stores} />
                <Route path="/stock" component={Stocks} />
                <Route path="/auth" component={Login} />
            </Switch>
        );
    }
}

export default RouterLink;