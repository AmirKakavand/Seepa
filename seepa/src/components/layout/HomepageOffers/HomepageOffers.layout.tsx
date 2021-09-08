import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard.component';
import photoLinks from '../../../data/photos/photoLinks';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        h2: {
            color: "#444",
            fontSize: "2.5rem",
            textAlign: "center",
            margin: "2rem auto 0.5rem"
        },
        gridContainer: {
            padding: "0 3%"
        }
    }))

function HomepageOffers() {
    const classes = useStyles();

    return (
        <div>
            <h2 id="offers" className={classes.h2}>Check out our special offers</h2>

            <Grid container xs={12} spacing={2} className={classes.gridContainer}>
                {photoLinks.specialOffers.map(url => {
                    return <>
                        {/* for smaller screens */}
                        <Hidden only={['sm', 'md', 'lg', 'xl']}>
                            <Grid item xs={12}>
                                <ProductCard imageSrc={url} shoeName="A Pair of shoes"
                                    price={Math.floor(Math.random() * 90) + 10} />
                            </Grid>
                        </Hidden>

                        {/* for mid-size screens */}
                        <Hidden only={['xs', 'md', 'lg', 'xl']}>
                            <Grid item xs={6}>
                                <ProductCard imageSrc={url} shoeName="A Pair of shoes"
                                    price={Math.floor(Math.random() * 90) + 10} />
                            </Grid>
                        </Hidden>

                        {/* for bigger screens */}
                        <Hidden smDown>
                            <Grid item xs={3}>
                                <ProductCard imageSrc={url} shoeName="A Pair of shoes"
                                    price={Math.floor(Math.random() * 90) + 10} />
                            </Grid>
                        </Hidden>
                    </>
                })}
            </Grid>
        </div>
    )
}

export default HomepageOffers;