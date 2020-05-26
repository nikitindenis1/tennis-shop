import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import {
  PRODUCTS_ROUTE,
  CART_ROUTE,
  PRODUCT_PAGE_ROUTE,
  HOME_ROUTE,
  PRODUCT_CATEGORY_ROUTE,
  CATEGORY_PRODUCTS,
  CATEGORY_PRODUCTS_PRODUCT,
  PLAYERS_ROUTE,
  PLAYER_PAGE_ROUTE,
} from "./tools/routes";
import Products from "./components/products/Products";
import ProductCategories from "./components/product-categories/ProductCategories";
import CartPreview from "./components/cart/CartPreview";
import CartPage from "./components/cart/CartPage";
import { getCookie } from "./tools/cookie";
import { connect } from "react-redux";
import * as actions from "./actions/actions";
import ProductPage from "./components/product-page/ProductPage";
import Players from "./components/Players/Players";
import PlayerPage from "./components/Players/PlayerPage";

class App extends Component {
  componentDidMount() {
    let cart_list = getCookie("shopping-cart");
    if (cart_list) {
      this.props.setDataToCartReducer("cart_list", JSON.parse(cart_list));
    }
  }
  render() {
    return (
      <div className="app">
        <div className="app__flex">
          <Router>
            <Navbar />
            <CartPreview />
            <Switch>
              <Route
                exact
                path={HOME_ROUTE.replace(":category_type", "")}
                render={() => <ProductCategories />}
              />
              <Route
                exact
                path={PRODUCT_CATEGORY_ROUTE}
                render={() => <ProductCategories />}
              />
              <Route
                exact
                path={CATEGORY_PRODUCTS}
                render={() => <Products />}
              />
              <Route exact path={PRODUCTS_ROUTE} render={() => <Products />} />
              <Route
                exact
                path={PRODUCT_PAGE_ROUTE}
                render={() => <ProductPage />}
              />
              <Route
                exact
                path={CATEGORY_PRODUCTS_PRODUCT}
                render={() => <ProductPage />}
              />

              <Route exact path={CART_ROUTE} render={() => <CartPage />} />
              <Route exact path={PLAYERS_ROUTE} render={() => <Players />} />
              <Route
                exact
                path={PLAYER_PAGE_ROUTE}
                render={() => <PlayerPage />}
              />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ cart_reducer }) {
  return { cart_reducer };
}

export default connect(mapStateToProps, actions)(App);
