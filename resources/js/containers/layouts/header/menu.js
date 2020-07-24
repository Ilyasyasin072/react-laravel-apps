import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Home, Assignment, ArrowBack, ViewAgenda, Face } from '@material-ui/icons'
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const MenuHeader = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [staffs, setStaff] = useState(null);
    const [logout, setLogout] = useState(null);
    const [category, setCategory] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleCustomer = (e) => {
        setCustomer(e.currentTarget);
    }
    const handleStaff = (e) => {
        setStaff(e.currentTarget);
    }
    const handleLogout = (e) => {
        setLogout(e.currentTarget);
    }

    const handleCategory = (e) => {
        setCategory(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
        setCustomer(null);
        setStaff(null);
        setLogout(null);
        setCategory(null);
    }
    return (
        <div>
            <Button onClick={handleClick} aria-controls="customized-menu" color="inherit"><Assignment /></Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem component={Link} to="add-inventory" >
                    <ListItemText primary="Create Inventory" />
                </StyledMenuItem>
                <StyledMenuItem component={Link} to="inventory" >
                    <ListItemText primary="Inventory" />
                </StyledMenuItem>
                <StyledMenuItem component={Link} to="orders" >
                    <ListItemText primary="Orders" />
                </StyledMenuItem>
                <StyledMenuItem component={Link} to="ordersitems" >
                    <ListItemText primary="Order Items" />
                </StyledMenuItem>
                <StyledMenuItem component={Link} to="products" >
                    <ListItemText primary="Products" />
                </StyledMenuItem>
                <StyledMenuItem component={Link} to="transaction" >
                    <ListItemText primary="transaction" />
                </StyledMenuItem>
            </StyledMenu>
            <Button onClick={handleCustomer} aria-controls="customized-menu-customer" color="inherit"><Face /></Button>
            <StyledMenu
                id="customized-menu-customer"
                anchorEl={customer}
                keepMounted
                open={Boolean(customer)}
                onClose={handleClose}
            >
                <StyledMenuItem component={Link} to="customers" >
                    <ListItemText primary="Create Customer" />
                </StyledMenuItem>
                <StyledMenuItem component={Link} to="customers" >
                    <ListItemText primary="Customer" />
                </StyledMenuItem>
            </StyledMenu>
            <Button onClick={handleStaff} aria-controls="customized-menu-customer" color="inherit"><ViewAgenda /></Button>
            <StyledMenu
                id="customized-menu-customer"
                anchorEl={staffs}
                keepMounted
                open={Boolean(staffs)}
                onClose={handleClose}
            >
                <StyledMenuItem component={Link} to="staffs" >
                    <ListItemText primary="Create staffs" />
                </StyledMenuItem>
                <StyledMenuItem component={Link} to="staffs" >
                    <ListItemText primary="staffs" />
                </StyledMenuItem>
            </StyledMenu>
            <Button onClick={handleLogout} aria-controls="customized-menu-customer" color="inherit"><ArrowBack /></Button>
            <StyledMenu
                id="customized-menu-customer"
                anchorEl={logout}
                keepMounted
                open={Boolean(logout)}
                onClose={handleClose}
            >
                <StyledMenuItem component={Link} to="auth" >
                    <ListItemText primary="Login" />
                </StyledMenuItem>
                <StyledMenuItem >
                    <ListItemText primary="Profile" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Logout" />
                </StyledMenuItem>
            </StyledMenu>
            <Button onClick={handleCategory} aria-controls="customized-menu-category" color="inherit"><Home /></Button>
            <StyledMenu
                id="customized-menu-category"
                anchorEl={category}
                keepMounted
                open={Boolean(category)}
                onClose={handleClose}
            >
                <StyledMenuItem component={Link} to="category" >
                    <ListItemText primary="Category" />
                </StyledMenuItem>

            </StyledMenu>
        </div >
    )
}

export default MenuHeader;