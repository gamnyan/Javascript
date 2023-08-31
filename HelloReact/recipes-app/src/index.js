import React from "react";
import { createRoot } from "react-dom/client";
import Menu from "./components/Menu.js";
import data from "./data/recipes.json";

const root = createRoot(document.getElementById("root"));
root.render(<Menu title="맛있는 조리법" recipes={data} />);
