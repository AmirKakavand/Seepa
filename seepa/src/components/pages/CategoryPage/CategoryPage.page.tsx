import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import photoLinks from '../../../data/photos/photoLinks';
import ProductCard from '../../components/ProductCard/ProductCard.component';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        page: {
            padding: "1rem 0 3rem 3%",
            [theme.breakpoints.up('sm')]: {
                padding: "4rem 0 0 3%"
            }
        },
        h1: {
            color: "#444",
            fontSize: "2rem"
        },
        h2: {
            color: "#444",
            fontSize: "1.3rem"
        },
    }))

interface IProps {
    Category: string
}

function CategoryPage({ Category }: IProps) {
    const classes = useStyles();

    return (
        <div className={classes.page}>
            <h1 className={classes.h1}>{Category} Shoes</h1>
            <h2 className={classes.h2}>
                Browse through our {Category.toLowerCase()} shoes and find what suits your needs
            </h2>


            <Grid container xs={11} spacing={2}>
                {Object.values(photoLinks.categories).map(category => {
                    if (category.categoryName === Category) {
                        return category.imageUrls.map(imageUrl => {
                            return <>
                                <Hidden smUp>
                                    <Grid item xs={12}>
                                        <ProductCard imageSrc={imageUrl} />
                                    </Grid>
                                </Hidden>
                                <Hidden xsDown>
                                    <Grid item xs={4}>
                                        <ProductCard imageSrc={imageUrl} />
                                    </Grid>
                                </Hidden>
                            </>
                        })
                    }
                })}

            </Grid>
        </div>
    )
}

export default CategoryPage
