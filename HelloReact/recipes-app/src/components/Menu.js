import React from "react";
import Recipe from "./Recipe";
// import "../../stylesheets/Menu.css";

const Menu = ({ title, recipes }) => (
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className="recipes">
      {recipes.map((e, i) => (
        <Recipe key={i} {...e} />
      ))}
    </div>
  </article>
);

export default Menu;
