import React from 'react'
import { Container, Grid, Button, Typography } from '@material-ui/core'
import useStyles from "./styles"
import CartItem from './cart-item/CartItem'


const Cart = ({ cart }) => {
    const classes = useStyles()
    const isEmpty = !cart.total_items

    const EmptyCart = () => (
        <Typography variant='subtitle1'>You have no items in cart, starting adding some!</Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id} >
                        <CartItem item={item} />
                        {/* <div>{item.name}</div> */}
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>
                    Subtotal: { cart.subtotal.formatted_with_symbol }
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
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