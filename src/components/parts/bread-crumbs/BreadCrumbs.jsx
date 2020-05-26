import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./bread-crumbs.css";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import text from "../../../data/text";
import {
  HOME_ROUTE,
  CATEGORY_PRODUCTS,
  PRODUCTS_ROUTE,
} from "../../../tools/routes";
class BreadCrumbs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.createBreadCrumbsData();
  }
  createBreadCrumbsData = () => {
    const { product_name, category } = this.props;
    let type = this.props.match.params.product_type;
    let category_type = category
      ? category
      : this.props.match.params.category_type;

    const data = [
      {
        text: "Home",
        url: HOME_ROUTE,
      },
      category_type && text[category_type]
        ? {
            text: text[category_type].text,
            url: text[category_type].url.replace(
              ":category_type",
              category_type
            ),
          }
        : "",
      type && text[type]
        ? {
            text: type ? text[type].text : "",
            url: category_type
              ? CATEGORY_PRODUCTS.replace(
                  ":category_type",
                  category_type ? category_type : ""
                ).replace(":product_type", type)
              : PRODUCTS_ROUTE.replace(":product_type", type),
          }
        : "",
      product_name
        ? {
            text: product_name,
          }
        : "",
    ];

    this.setState({
      data,
    });
  };
  render() {
    const { data } = this.state;
    return data && data.length > 0 && data.filter((m) => m.text).length > 1 ? (
      <div className="bread__crumbs">
        {data
          .filter((m) => m.text)
          .map((m, i) => {
            if (m.url) {
              return (
                <span 
                key = {i}
                className="bread__crumbs__element flex__center">
                  <Link to={m.url}>{m.text}</Link>
                  {m.text ? <KeyboardArrowRightRoundedIcon /> : ""}
                </span>
              );
            } else {
              return (
                <span 
                
                key = {i}
                className="bread__crumbs__element flex__center">
                  <p to={m.url}>{m.text}</p>
                  {m.text ? <KeyboardArrowRightRoundedIcon /> : ""}
                </span>
              );
            }
          })}
      </div>
    ) : (
      ""
    );
  }
}

export default withRouter(BreadCrumbs);
