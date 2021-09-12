import { Switch, Route } from "react-router-dom";
import CategoryPage from "../components/pages/CategoryPage/CategoryPage.page";
import Homepage from "../components/pages/Homapage/Homepage.page";
import photoLinks from "../data/photos/photoLinks";
import ProductPage from "../components/pages/ProductPage/ProductPage.page";
import CartPage from "../components/pages/Cart/CartPage.page";


const Routes: JSX.Element = <>
    <Switch>
        <Route path="/" exact>
            <Homepage />
        </Route>
        <Route path="/cart">
            <CartPage />
        </Route>

        {/* generate routes for each category page */}
        {photoLinks.homepageCategories.map(category => {
            return <Route path={"/" + category.name + "-shoes"}>
                <CategoryPage Category={category.name} />
            </Route>
        })}

        {Object.values(photoLinks.categories).map(category => {
            return category.imageUrls.map(url => {
                return <Route path={"/product-page/" + url}>
                    <ProductPage imageSrc={url} />
                </Route>
            })
        })}
    </Switch>
</>

export default Routes;