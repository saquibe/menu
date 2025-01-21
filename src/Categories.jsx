import React from "react";

function Categories({ categories }) {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button type="button" key={category} className="btn">
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
