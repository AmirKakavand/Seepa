import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../features/cart/cartSlice';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ICartItem } from '../../../features/cart/cartSlice';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: "1rem",
            backgroundColor: "#eee",
            color: "#444",
            fontSize: "1.2rem",
            textAlign: "center"
        },
        image: {
            width: "100%"
        },
        productName: {
            fontSize: "1.5rem",
            textAlign: "center",
            margin: "0 auto 1.5rem"
        },
        price: {
            fontSize: "1.5rem",
            color: "crimson"
        },
        count: {
            margin: "1rem"
        },
        removeButton: {
            margin: "1rem",
            textTransform: "none"
        }
    }))

interface IProps {
    item: ICartItem
}

function CartItem({ item }: IProps) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [total, setTotal] = useState(Math.floor(item.count * item.price));

    function handleChangeCount(event: React.ChangeEvent<HTMLInputElement>) {
        setTotal(Math.floor(item.price * parseInt(event.target.value)))
    }

    function handleRmoveItem(imageUrl: string) {

        dispatch(removeFromCart(imageUrl));
        alert("removed item from cart!");
    }

    return (
        <Grid container xs={12} className={classes.root}>
            <Grid item xs={12} sm={6}>
                <img src={item.imageSrc} alt={item.productName}
                    className={classes.image} />
            </Grid>

            <Grid container xs={12} sm={6}>
                <Grid item xs={12} className={classes.productName}>
                    <span>{item.productName}</span>
                </Grid>
                <Grid item xs={12}>
                    Base price: <span className={classes.price}>${item.price}</span>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="standard-number"
                        label="Count"
                        type="number"
                        defaultValue={item.count}
                        className={classes.count}
                        onChange={handleChangeCount}
                    />
                    <div>
                        Total: <span className={classes.price}>${total}</span>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="secondary"
                        className={classes.removeButton} onClick={() => {
                            handleRmoveItem(item.imageSrc)
                        }}>
                        Remove from cart
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CartItem;
