import React from 'react'
import { Container, Grid, Button, Typography } from '@material-ui/core'
import useStyles from "./styles"
import CartItem from './cart-item/CartItem'
import { Link } from 'react-router-dom'


const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles()
    const isEmpty = !cart.total_items
    const EmptyCart = () => (
        <Typography variant='subtitle1'>
            You have no items in cart, 
            <Link to="/" className={classes.link}> starting adding some</Link>!
        </Typography>
    )

    if (!cart.line_items) return 'Loading...';

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id} >
                        <CartItem item={item} onUpdateCardQuantity={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>
                    Subtotal: { cart.subtotal.formatted_with_symbol }
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )

  return (
    <Container>
        <div className={classes.toolbar} />
        <Typography variant='h3' className={classes.title} gutterBottom>Your Shopping Cart</Typography>
        { isEmpty ? <EmptyCart /> : <FilledCart /> }
    </Container>
  )
}

export default Cart