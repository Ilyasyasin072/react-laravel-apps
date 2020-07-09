import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import { Home, Book, AccountBox } from '@material-ui/icons'

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
                    <Link to="/" style={{color: "white"}}>
                        <Button color="inherit"><Home />Dashboard</Button>
                    </Link>
                    {/* <Link to="customers" style={{color: "white"}}>
                        <Button color="inherit"><Home />Customers</Button>
                    </Link>
                    <Link to="staffs" style={{color: "white"}}>
                        <Button color="inherit"><AccountBox />Staffs</Button>
                    </Link>
                    <Link to="orders" style={{color: "white"}}>
                        <Button color="inherit"><AccountBox />Orders</Button>
                    </Link>
                    <Link to="stores" style={{color: "white"}}>
                        <Button color="inherit"><AccountBox />Stores</Button>
                    </Link>
                    <Link to="ordersitems" style={{color: "white"}}>
                        <Button color="inherit"><AccountBox />Orders Items</Button>
                    </Link>

                    <Link to="products" style={{color: "white"}}>
                        <Button color="inherit"><AccountBox />Products</Button>
                    </Link>
                    <Link to="landing" style={{color: "white"}}>
                        <Button color="inherit"><AccountBox />Landing</Button>
                    </Link> */}

                    <Link to="inventory" style={{color: "white"}}>
                        <Button color="inherit"><AccountBox />Inventoy</Button>
                    </Link>
                    {/* <Link to="transaction" style={{color: "white"}}>
                        <Button color="inherit"><AccountBox />Transaction</Button>
                    </Link> */}
                </Toolbar>
                {/* <List component="nav">
            <ListItem component="div" >

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Home  <Home />
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Posts <Book />
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Contact <AccountBox />
                    </TypoGraphy>
                </ListItemText>
            </ListItem >

        </List> */}
            </AppBar>
        </div>
    )

}

export default Header;