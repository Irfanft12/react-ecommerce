import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from "../../assets/ecommerce-logo.png"
import useStyles from "./styles"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = ({ totalItems }) => {
    const classes = useStyles()
    const location = useLocation()

  return (
    <AppBar position='fixed' className={classes.appBar} color="inherit">
        <Toolbar>
                <Typography component={Link} to="/" variant='h6' color='inherit' className={classes.title}>
                    <img src={logo} alt="logo" height={"25px"} className={classes.image} />
                    React E-commerce
                </Typography>
            <div className={classes.grow} />
            {
                location.pathname === "/" && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color='inherit'>
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                )
            }
        </Toolbar>
    </AppBar>
  )
}

export default Navbar