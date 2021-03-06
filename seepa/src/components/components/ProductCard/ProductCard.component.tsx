import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
        },
        media: {
            height: "15rem",
        },
        price: {
            color: "crimson",
            fontSize: "1.2rem"
        },
        onlyFor: {
            color: "#444",
            fontSize: "1.1rem"
        },
        button: {
            margin: "auto auto 0.5rem 0.5rem",
            backgroundColor: "crimson",
            color: "white",
        }
    })
)

interface IProps {
    imageSrc: string,
    shoeName?: string,
    price?: number
}

function ProductCard({ imageSrc, shoeName = "a pair of shoes", price = 49.95 }: IProps) {
    const classes = useStyles()

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={imageSrc}
                        title={shoeName}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {shoeName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            The best pair of shoes! With these shoes there
                            won't be a place on god's green earth that
                            you wouldn't be able to go to.
                            Don't lose this chance and buy them now!<br />
                            <span className={classes.onlyFor}>Only for </span>
                            <span className={classes.price}>${price}</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link
                        onClick={() => window.scrollTo(0, 0)}
                        style={{ textDecoration: "none" }}
                        to={"/product-page/" + imageSrc}>
                        <Button size="small" variant='contained' color="secondary"
                            className={classes.button}>
                            View
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductCard
