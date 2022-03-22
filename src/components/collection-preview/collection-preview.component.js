import React, { Component } from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

class CollectionPreview extends Component {
  render() {
    console.log(this.props);
    const { title, items } = this.props;
    return (
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items
            .filter((item, index) => index < 4)
            .map(({ id, ...otherItemProps }) => {
              return <CollectionItem key={id} {...otherItemProps} />;
            })}
        </div>
      </div>
    );
  }
}
export default CollectionPreview;
