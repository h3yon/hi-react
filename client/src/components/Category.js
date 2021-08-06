import React from "react";

function Category({ name }) {
  return (
    <div className="category">
      <div className="category-name">{name}</div>
    </div>
  );
}

export default Category;
