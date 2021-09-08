import React from 'react';
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import photoLinks from '../../../data/photos/photoLinks';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        topSectionPhone: {
            zIndex: -1
        },
        h2: {
            marginTop: "2rem",
            color: "#444",
            textAlign: "center"
        },
        h3: {
            color: "#444",
            textAlign: "center"
        },
        link: {
            textDecoration: "none",
            // width: "50%"
        },
        categoryTitle: {
            color: "#444",
            margin: "2rem auto 0.5rem",
            textAlign: "center"
        },
        categoryTitleDesktop: {
            color: "#444",
            margin: "0.5rem auto 1rem",
            textAlign: "center"
        },
        categoryPhotoContainer: {
            margin: "auto",
            borderRadius: "0.5rem",
        },
        categoryCoverPhoto: {
            width: "100%",
            borderRadius: "0.5rem"
        },
        categoriesSectionDesktop: {
            padding: "0.5rem 3%"
        },
        categoryPhotoContainerDesktop: {
            borderRadius: "0.5rem",
            width: "auto",
        },
        categoryCoverPhotoDesktop: {
            width: "100%",
            borderRadius: "0.5rem"
        },
    }),
);
function HomepageCategories() {
    const classes = useStyles();

    return (
        <div>
            <h2 className={classes.h2}>
                Your feet deserve the best
            </h2>
            <h3 id="categories" className={classes.h3}>
                Find your suitable shoes
            </h3>

            <Hidden smUp>
                <Grid container xs={12}>
                    {photoLinks.homepageCategories.map(category => {
                        return <>
                            <Link className={classes.link}
                                to={category.name + "-shoes"}
                                key={category.imageSrc}>
                                <h3 className={classes.categoryTitle}>
                                    {category.name}
                                </h3>
                                <Grid item xs={11}
                                    className={classes.categoryPhotoContainer}>
                                    <img src={category.imageSrc}
                                        alt={category.name + "shoes"}
                                        className={classes.categoryCoverPhoto} />
                                </Grid>
                            </Link>
                        </>
                    })}
                </Grid>
            </Hidden>

            <Hidden xsDown>
                <Grid container xs={12} spacing={2} className={classes.categoriesSectionDesktop}>
                    {photoLinks.homepageCategories.map(category => {
                        return <>
                            <Grid item xs={4}
                                className={classes.categoryPhotoContainerDesktop}>
                                <Link className={classes.link}
                                    to={category.name + "-shoes"}
                                    key={category.imageSrc}>
                                    <img src={category.imageSrc}
                                        alt={category.name + "shoes"}
                                        className={classes.categoryCoverPhotoDesktop} />
                                </Link>
                            <h3 className={classes.categoryTitleDesktop}>
                                {category.name}
                            </h3>
                            </Grid>
                        </>
                    })}
                </Grid>
            </Hidden>
        </div>
    )
}

export default HomepageCategories
