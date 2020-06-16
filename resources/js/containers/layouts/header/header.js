import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                
                    <Link to="customers" style={{color: "white"}}>
                        <Button color="inherit">Customers</Button>
                    </Link>
                    <Link to="staffs" style={{color: "white"}}>
                        <Button color="inherit">Staffs</Button>
                    </Link>
                    <Link to="orders" style={{color: "white"}}>
                        <Button color="inherit">Orders</Button>
                    </Link>
                    <Link to="stores" style={{color: "white"}}>
                        <Button color="inherit">Stores</Button>
                    </Link>
                    <Link to="ordersitems" style={{color: "white"}}>
                        <Button color="inherit">Orders Items</Button>
                    </Link>

                    <Link to="products" style={{color: "white"}}>
                        <Button color="inherit">Products</Button>
                    </Link>
                    <Link to="landing" style={{color: "white"}}>
                        <Button color="inherit">Landing</Button>
                    </Link>

                    <Link to="inventory" style={{color: "white"}}>
                        <Button color="inherit">Inventoy</Button>
                    </Link>
                    <Link to="transaction" style={{color: "white"}}>
                        <Button color="inherit">Transaction</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )

}

export default Header;