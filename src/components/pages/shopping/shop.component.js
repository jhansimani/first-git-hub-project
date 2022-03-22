import React, { Component } from "react";
import CollectionPreview from "../../collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";
class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {/* {collections.map(({ id, title, routeName, items }) => { */}
        {collections.map(({ id, ...otherCollectionsProps }) => {
          return (
            // <div key={id}>
            //   <h1>{title}</h1>
            // </div>
            <CollectionPreview
              key={id}
              {...otherCollectionsProps}
            ></CollectionPreview>
          );
        })}
      </div>
    );
  }
}
export default ShopPage;
