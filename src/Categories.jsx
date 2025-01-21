import React from "react";

function Categories({ categories, filterItems }) {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          onClick={() => filterItems(category)}
          type="button"
          key={category}
          className="btn"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
