import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem.component";
import "./CollectionPreview.style.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...theOthers }) => (
          <CollectionItem key={id} {...theOthers} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
