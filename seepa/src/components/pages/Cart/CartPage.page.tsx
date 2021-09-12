import React from 'react';
import { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem.component';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: "1rem auto 4.5rem",
            paddingBottom: "1rem",
            [theme.breakpoints.up('sm')]: {
                margin: "5rem auto 0"
            }
        },
        cartItemsContainer: {
            margin: "2rem auto",
            backgroundColor: "#ccc"
        },
        h1: {
            color: "#444",
            fontSize: "2rem",
            textAlign: 'center',
            [theme.breakpoints.up('sm')]: {
                textAlign: "left",
                fontSize: "2.5rem",
                margin: '0 0 0 1rem'
            }
        },
        altText: {
            fontSize: "1.4rem",
            color: "#444",
            textAlign: "center",
            margin: "0 0.5rem"
        },
        link: {
            color: 'crimson',
            textDecoration: "none",
            transition: "linear 0.5s",
            '&:hover': {
                color: "#666",
            }
        }
    }))

function CartPage() {
    const cart = useSelector((state: RootState) => state.cart);
    const classes = useStyles();
    let initialPrice = 0;
    cart.cartItems.map(cartItem => initialPrice += cartItem.price);

    return (
        <div className={classes.root}>
            <h1 className={classes.h1}>Your cart</h1>

            {cart.cartItems.length < 1 && <>
                <h1 className={classes.h1}>No items found!</h1>
                <p className={classes.altText}>
                    Please add some items to your cart first.<br />
                    <Link to='/' className={classes.link}>Go back to homepage</Link>
                </p>
            </>}

            <Grid container xs={11} sm={10} md={9}
                className={classes.cartItemsContainer}>

                {cart.cartItems.map(item => {
                    return <CartItem item={item} />
                })}

            </Grid>
        </div>
    )
}

export default CartPage;
