import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Home, Book, AccountBox } from '@material-ui/icons'
import MenuHeader from './menu';
import axios from 'axios';
import { remmoveUserSession } from '../../../config/common';
import { useHistory } from 'react-router-dom';
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
    const history = useHistory();

    const handleLogout = () => {
        const url = 'http://127.0.0.1:8000/api/auth/logout';
        axios.get(url).then(result => {
            console.log(result);
            remmoveUserSession();
            history.push('/auth');
        })
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        React | Laravel
                    </Typography>
                    <Link to="/" style={{ color: "white" }}>
                        <Button color="inherit"><Home /></Button>
                    </Link>
                    <MenuHeader />
                    <Button onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )

}

export default Header;