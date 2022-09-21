import React from 'react'
import { Container, Grid, Button, Typography } from '@material-ui/core'
import useStyles from "./styles"


const Cart = ({ cart }) => {
    console.log(cart)
    // console.log(cart.line_items.length)
    const classes = useStyles()
    const isEmpty = !cart.total_items

    const EmptyCart = () => (
        <Typography variant='subtitle1'>You have no items in cart, starting adding some!</Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.total_items}
            </Grid>
        </>
    )

  return (
    <Container>
        <div className={classes.toolbar} />
        <Typography variant='h3' className={classes.title}>Your Shopping Cart</Typography>
        { isEmpty ? <EmptyCart /> : <FilledCart /> }
    </Container>
  )
}

export default Cart