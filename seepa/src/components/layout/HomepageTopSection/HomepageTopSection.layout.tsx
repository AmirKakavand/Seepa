import Carousel from 'react-bootstrap/Carousel';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import photoLinks from '../../../data/photos/photoLinks';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        topSectionPhone: {
            zIndex: -1
        },
        welcome: {
            color: "#444",
            margin: "1rem 0 0",
            textAlign: "center",
        },
        carouselPhone: {
            maxWidth: "100%",
            height: "auto",
            width: "auto",
            margin: "1rem 5%",
            borderRadius: "0.5rem",
        },
        carouselImagePhone: {
            objectFit: "fill",
            maxWidth: "100%",
            maxHeight: "75%",
            borderRadius: "0.5rem"
        },
        carouselDesktop: {
            width: "90%",
            height: "fit-content",
            margin: "auto",
            borderRadius: "0.5rem",
            padding: "5% 0",
        },
        caption: {
            color: "#444",
            fontSize: "1.2rem"
        },
        topSectionDesktop: {
            marginTop: "3rem"
        },
        carouselImageDesktop: {
            objectFit: "fill",
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "0.5rem"
        },
        eventsPhone: {
            maxWidth: "100%",
            margin: "0 6%",
        },
        eventsDesktop: {
            maxWidth: "100%",
            margin: "0",
            padding: "2rem 1.5rem"
        },
        eventContainerPhone: {
            margin: "0 auto",
            borderRadius: "0.5rem"
        },
        eventContainerDesktop: {
            margin: "auto",
            borderRadius: "0.5rem",
            maxHeight: "100%",
        },
        eventImagePhone: {
            maxWidth: "100%",
            height: "75%",
            margin: "0 auto",
            borderRadius: "0.5rem"
        },
        eventImageDesktop: {
            width: "100%",
            height: "100%",
            margin: "0 auto",
            borderRadius: "0.5rem"
        },
        eventTitlePhone: {
            textAlign: "center",
            color: "#444",
            fontSize: "1.2rem"
        },
        eventTitleDesktop: {
            color: "#444",
            fontSize: "1.5rem",
        },
        link: {
            textDecoration: "none",
        }
    }),
);

function HomepageTopSection() {
    const classes = useStyles();


    return (
        <div>

            {/* Homepage top section for phones & small tablets */}
            <Hidden smUp>
                <h1 className={classes.welcome}>Welcome to Seepa!</h1>
                <Grid container spacing={3} className={classes.topSectionPhone}>
                    <Grid item xs={12}>
                        <Carousel fade className={classes.carouselPhone}>
                            {photoLinks.carouselPhotos.map(carouselItem => {
                                return <Carousel.Item
                                    key={carouselItem.imageSrc}>
                                    <img
                                        className={classes.carouselImagePhone}
                                        src={carouselItem.imageSrc}
                                        alt={carouselItem.altText}
                                    />
                                    <Carousel.Caption>
                                        {carouselItem.caption}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            })}
                        </Carousel>
                    </Grid>

                    <Grid container xs={11} spacing={1} className={classes.eventsPhone}>

                        <Grid item xs={6} className={classes.eventContainerPhone}>
                            <h2 className={classes.eventTitlePhone}>New Shoes</h2>
                            <a href="#categories">
                                <img className={classes.eventImagePhone}
                                    src={photoLinks.homepageEvents.newShoesCoverPhoto.imageSrc}
                                    alt={photoLinks.homepageEvents.newShoesCoverPhoto.altText} />
                            </a>
                        </Grid>

                        <Grid item xs={6} className={classes.eventContainerPhone}>
                            <h2 className={classes.eventTitlePhone}>Offers</h2>
                            <a href="#offers">
                                <img className={classes.eventImagePhone}
                                    src={photoLinks.homepageEvents.specialOffersCoverPhoto.imageSrc}
                                    alt={photoLinks.homepageEvents.specialOffersCoverPhoto.altText} />
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>


            {/* Homepage top section for bigger screens */}
            <Hidden xsDown>
                <Grid container xs={12} className={classes.topSectionDesktop}>
                    <Grid item xs={8}>
                        <Carousel fade className={classes.carouselDesktop}>
                            {photoLinks.carouselPhotos.map(carouselItem => {
                                return <Carousel.Item
                                    key={carouselItem.imageSrc}>
                                    <img
                                        className={classes.carouselImageDesktop}
                                        src={carouselItem.imageSrc}
                                        alt={carouselItem.altText}
                                    />
                                    <Carousel.Caption className={classes.caption}>
                                        {carouselItem.caption}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            })}
                        </Carousel>
                    </Grid>

                    <Grid container xs={4} className={classes.eventsDesktop}>
                        <Grid item xs={10} className={classes.eventContainerDesktop}>
                            <a href="#categories" className={classes.link}>
                                <h2 className={classes.eventTitleDesktop}>
                                    New Shoes
                                </h2>
                                <img className={classes.eventImageDesktop}
                                    src={photoLinks.homepageEvents.newShoesCoverPhoto.imageSrc}
                                    alt={photoLinks.homepageEvents.newShoesCoverPhoto.altText} />
                            </a>
                        </Grid>
                        <Grid item xs={10} className={classes.eventContainerDesktop}>
                            <a href="#offers" className={classes.link}>
                                <h2 className={classes.eventTitleDesktop}>
                                    Special Offers
                                </h2>
                                <img className={classes.eventImageDesktop}
                                    src={photoLinks.homepageEvents.specialOffersCoverPhoto.imageSrc}
                                    alt={photoLinks.homepageEvents.specialOffersCoverPhoto.altText} />
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
        </div>
    )
}

export default HomepageTopSection;