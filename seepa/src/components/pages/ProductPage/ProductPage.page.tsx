import React from 'react';
import Button from '@material-ui/core/Button';
import { FaCartPlus } from "react-icons/fa";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/cart/cartSlice';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            backgroundColor: "#888",
            margin: "1rem auto 4.5rem",
            textAlign: "center",
            borderRadius: "0.5rem",
            color: "#eee",
            fontSize: "1.5rem",
            padding: "0 0 1rem",
            [theme.breakpoints.up('sm')]: {
                margin: "6rem auto",
                padding: "0",
                fontSize: "2.5rem"
            }
        },
        image: {
            width: "100%",
            height: "auto",
            margin: "auto",
            borderRadius: "0.5rem",
        },
        productName: {
            margin: "1rem auto 0",
        },
        description: {
            fontSize: "1.2rem",
            textAlign: "center",
            margin: "auto",
            [theme.breakpoints.up('sm')]: {
                fontSize: "1.2rem"
            }
        },
        price: {
            color: "crimson"
        },
        addBtn: {
            margin: "auto auto 0.5rem",
        },
        cartIcon: {
            marginLeft: "0.5rem",
            fontSize: "1.3rem"
        },
        infoContainer: {
            margin: "auto",
            minHeight: "100%",
        }
    }))

interface IProps {
    imageSrc: string,
    productName?: string,
    description?: string,
    price?: number
}

const defaultDescription = `These shoes are most suitable for rough terrains.
 Use them for a mountain hike or similar activities.
  These shoes have hard exteriors and soft interiors which
   makes them the perfect choice for such activities. Buy them now!`

function ProductPage({ imageSrc, productName = "A pair of shoes",
    description = defaultDescription, price = 49.95 }: IProps) {

    const dispatch = useDispatch();
    const classes = useStyles();
    const [openDialog, setOpenDialog] = React.useState(false);
    const [count, setCount] = React.useState(1);

    const [openSuccess, setOpenSuccess] = React.useState(false);


    const handleClick = () => {
        setOpenSuccess(true);
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccess(false);
    };

    function handleCloseDialog() {
        setOpenDialog(false);
    }

    function handleChangeCount(event: React.ChangeEvent<HTMLInputElement>) {
        setCount(parseInt(event.target.value));
    }

    function handleCancelDialog() {
        setOpenDialog(false);
        setCount(1)
    }

    function handleAddToCart() {
        const newItem = {
            imageSrc: imageSrc,
            productName: productName,
            description: description,
            price: price,
            count: parseInt(((document.getElementById("productCount")!) as HTMLInputElement).value)
        }

        dispatch(addToCart(newItem))
        handleCloseDialog()
        setCount(1)
        handleClick()
    }

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    return (
        <>
            <Grid container xs={11} md={8} className={classes.container}>
                <Grid item xs={12} sm={6}>
                    <img src={imageSrc} alt={productName} className={classes.image} />
                </Grid>
                <Grid item xs={11} sm={6} className={classes.infoContainer}>
                    <Grid item xs={12} className={classes.productName}>
                        <h1>{productName}</h1>
                    </Grid>
                    <Grid item xs={11} className={classes.description}>
                        {description}
                    </Grid>
                    <Grid item xs={12}>
                        Only for: <span className={classes.price}>${price}</span>
                    </Grid>
                    <Grid item xs={12} className={classes.addBtn}>
                        <Button variant="contained" color="secondary"
                            onClick={handleClickOpenDialog}>
                            Add to cart <FaCartPlus className={classes.cartIcon} />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>



            {/* Material UI Snackbar(success message) */}
            <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Shoes successfully added to your cart!
                </Alert>
            </Snackbar>


            {/* Material UI Dialog */}
            <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add to Cart</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        How many pairs of these shoes do you want?
                    </DialogContentText>
                    <div className="d-flex flex-row 
                    justify-content-around align-items-end">
                        <TextField
                            id="productCount"
                            label="Count"
                            type="number"
                            defaultValue={count}
                            onChange={handleChangeCount}
                        />
                        <div style={{ fontSize: "2.5rem" }}>{count}</div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddToCart} variant="contained"
                        color="primary">
                        Add to cart
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ProductPage;