import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { MdShoppingCart, MdShoppingBasket, MdHome } from "react-icons/md";
import Hidden from '@material-ui/core/Hidden';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            fontSize: "2.5rem",
            color: "white",
            textDecoration: "none"
        },
        appBar: {
            position: "fixed",
            top: "0",
            zIndex: 3
        },
        bottomNav: {
            width: "100%",
            position: "fixed",
            zIndex: 3,
            bottom: "0",
        },
        toolbar: {
            backgroundColor: "#444"
        },
        navbarLinks: {
            textDecoration: "none",
        },
        navbarLinkButtons: {
            color: "white",
            textTransform: "none",
            fontSize: "1.5rem",
            backgroundColor: "inherit",
            "&:hover": {
                backgroundColor: "inherit"
            }
        },
        navbarIcon: {
            color: "#eee"
        },
        bottomNavIcon: {
            fontSize: "1.5rem",
            backgroundColor: "#444",
            color: "#eee",
            "&:active": {
                color: "red"
            },
            "&:visited": {
                color: "#eee"
            }
        }
    }),
);

function Navigation(): JSX.Element {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };
    return (
        <div>
            {/* Navigation for screens bigger than sm(small) */}
            <Hidden xsDown>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Link className={classes.title} to="/">
                            <Typography variant="h6" className={classes.title}>
                                Seepa
                            </Typography>
                        </Link>
                        <Link className={classes.navbarLinks} to="/products">
                            <Button className={classes.navbarLinkButtons}>
                                Products
                            </Button>
                        </Link>
                        <Link className={classes.navbarLinks} to="/cart">
                            <Button className={classes.navbarLinkButtons}>
                                Cart <IconButton className={classes.navbarIcon}>
                                    <MdShoppingCart />
                                </IconButton>
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Hidden>


            {/* Navigation for screens smaller than sm(small) */}
            <Hidden smUp>
                <BottomNavigation value={value} onChange={handleChange}
                    className={classes.bottomNav}>
                    <BottomNavigationAction label="Home" value="home"
                        component={Link} to="/"
                        className={classes.bottomNavIcon} icon={<MdHome />} />

                    <BottomNavigationAction label="Products" value="products"
                        component={Link} to="/products"
                        className={classes.bottomNavIcon} icon={<MdShoppingBasket />} />

                    <BottomNavigationAction label="Cart" value="cart"
                        component={Link} to="/cart"
                        className={classes.bottomNavIcon} icon={<MdShoppingCart />} />
                </BottomNavigation>
            </Hidden>
        </div>
    )
}

export default Navigation
