import React, { lazy, Suspense }from "react";
import {Skeleton} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const HomeComponent = lazy(() => import("./pages/home"));
const NewMoviesComponent = lazy(() => import("./pages/new-movies"));
const SearchComponent = lazy(() => import("./pages/search-movies"));
const DetailsMoviesComponent = lazy(() => import("./pages/details"));

const Movies = () => {
    return(
        <Router>
            <Suspense fallback={<Skeleton active/>}>
                <Switch>
                    <Route path="/home">
                        <HomeComponent />
                    </Route>
                    <Route path="/new-movies">
                        <NewMoviesComponent/>
                    </Route>
                    <Route path="/search-movies">
                        <SearchComponent/>
                    </Route>
                    {/*localhost:3000/ngoi-nha-hanh-phuc~123 */}
                    <Route path="/movie/:slug~:id">
                        <DetailsMoviesComponent/>
                    </Route>
                    <Route extract path="/">
                        <HomeComponent />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    )
}
export default Movies;