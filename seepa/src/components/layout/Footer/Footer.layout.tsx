import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            backgroundColor: "#333",
            color: "#ccc",
            marginBottom: "3.4rem",
            width: "100%",
            textAlign: "center",
            [theme.breakpoints.up('sm')]: {
                marginBottom: "0"
            }
        },
        seepa: {
            fontSize: "2rem",
            textAlign: "center",
            margin: "auto",
            [theme.breakpoints.up('sm')]: {
                fontSize: "2.5rem"
            }
        },
        contact: {
            fontSize: "1.5rem",
            textAlign: "center"
        },
        contactWays: {
            textAlign: "center",
        },
        gitHubIcon: {
            fontSize: "4rem"
        },
        linkedinIcon: {
            fontSize: "4.5rem"
        },
        anchorTag: {
            color: "inherit",
            textDecoration: "none"
        },
        copyRight: {
            textAlign: "center",
            margin: "1rem auto",
            [theme.breakpoints.up('sm')]:{
                margin: "auto"
            }
        }
    }))

function Footer() {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.container}>

                {/* for smaller screens */}
                <Hidden smUp>
                    {/* <Grid item xs={12} className={classes.seepa}>Seepa</Grid> */}
                    <Grid item xs={12} className={classes.contact}>Contact me</Grid>
                    <Grid container xs={12} spacing={2} className={classes.contactWays}>
                        <Grid item xs={6}>
                            <a href="https://github.com/AmirKakavand"
                                className={classes.anchorTag}>
                                <GitHubIcon className={classes.gitHubIcon} />
                            </a>
                        </Grid>
                        <Grid item xs={6}>
                            <a href="https://www.linkedin.com/in/amir-kakavand-1b16bb187/"
                                className={classes.anchorTag}>
                                <LinkedInIcon className={classes.linkedinIcon} />
                            </a>
                        </Grid>
                        <Grid item xs={6}>
                            <a href="https://github.com/AmirKakavand"
                                className={classes.anchorTag}>
                                GitHub
                            </a>
                        </Grid>
                        <Grid item xs={6}>
                            <a href="https://www.linkedin.com/in/amir-kakavand-1b16bb187/"
                                className={classes.anchorTag}>
                                Linkedin
                            </a>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.copyRight}>
                        <CopyrightIcon /> copyright 2021 Amir Kakavand
                    </Grid>
                </Hidden>

                {/* for bigger screens */}
                <Hidden xsDown>
                    <Grid container sm={4}>
                        <Grid item xs={12} className={classes.contact}>Contact me</Grid>
                        <Grid item xs={6}>
                            <a href="https://github.com/AmirKakavand"
                                className={classes.anchorTag}>
                                <GitHubIcon className={classes.gitHubIcon} />
                            </a>
                        </Grid>
                        <Grid item xs={6}>
                            <a href="https://www.linkedin.com/in/amir-kakavand-1b16bb187/"
                                className={classes.anchorTag}>
                                <LinkedInIcon className={classes.linkedinIcon} />
                            </a>
                        </Grid>
                        <Grid item xs={6}>
                            <a href="https://github.com/AmirKakavand"
                                className={classes.anchorTag}>
                                GitHub
                            </a>
                        </Grid>
                        <Grid item xs={6}>
                            <a href="https://www.linkedin.com/in/amir-kakavand-1b16bb187/"
                                className={classes.anchorTag}>
                                Linkedin
                            </a>
                        </Grid>
                    </Grid>

                    <Grid item sm={6} md={4} className={classes.copyRight}>
                        <CopyrightIcon /> copyright 2021 Amir Kakavand
                    </Grid>
                    <Grid item sm={2} md={4} className={classes.seepa}>Seepa</Grid>
                </Hidden>
            </Grid>
        </div>
    )
}

export default Footer
