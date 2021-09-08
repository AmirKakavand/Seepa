import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import photoLinks from '../../../data/photos/photoLinks';
import Hidden from "@material-ui/core/Hidden"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridContainer: {
            margin: "2rem 3%",
            backgroundColor: "#666",
            borderRadius: "0.5rem"
        },
        about: {
            color: "#eee",
            fontSize: "1.3rem",
            padding: "0.5rem",
            [theme.breakpoints.up('md')]: {
                fontSize: "1.5rem"
            }
        },
        aboutPhotoContainer: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        aboutPhoto: {
            width: "100%",
            borderRadius: "0.5rem",
        },
        h2: {
            color: "#444",
            margin: "2rem auto",
            textAlign: "center",
            fontSize: "2rem"
        },
    }))


function About() {
    const classes = useStyles();

    return (
        <div>
            <h2 id="about" className={classes.h2}>About us</h2>
            <Grid container xs={11} className={classes.gridContainer}>
                {/* for bigger screens */}
                <Hidden xsDown>
                    <Grid item xs={7} className={classes.about}>
                        Here at Seepa we've gathered the
                        best shoes of every company for all purposes for you to choose
                        from. No more waste of time, wandering the malls or browsing
                        the web. Check out are categories and choose what kind of shoes
                        you want and purchase them online. We'll deliver your shoes
                        in no time!
                    </Grid>
                    <Grid item xs={5} className={classes.aboutPhotoContainer}>
                        <img src={photoLinks.aboutUs} alt="about us"
                            className={classes.aboutPhoto} />
                    </Grid>
                </Hidden>

                {/* for smaller screens */}
                <Hidden smUp>
                    <Grid item xs={12} className={classes.aboutPhotoContainer}>
                        <img src={photoLinks.aboutUs} alt="about us"
                            className={classes.aboutPhoto} />
                    </Grid>
                    <Grid item xs={12} className={classes.about}>
                        Here at Seepa we've gathered the
                        best shoes of every company for all purposes for you to choose
                        from. No more waste of time, wandering the malls or browsing
                        the web. Check out are categories and choose what kind of shoes
                        you want and purchase them online. We'll deliver your shoes
                        in no time!
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    )
}

export default About
