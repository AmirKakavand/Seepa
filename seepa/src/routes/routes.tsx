import { Switch, Route } from "react-router-dom";
import HomepageTopSection from "../components/layout/HomepageTopSection/HomepageTopSection.layout";


const Routes: JSX.Element = <>
    <Switch>
        <Route path="/" exact>
            <HomepageTopSection />
        </Route>
    </Switch>
</>

export default Routes;