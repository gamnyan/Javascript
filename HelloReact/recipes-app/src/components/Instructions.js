import React from "react";

const Instructions = ({ title, steps }) => (
  <section className="instructions">
    <h2>{title}</h2>
    <ol>
      {steps.map((s, i) => (
        <li key={i}>{s}</li>
      ))}
    </ol>
  </section>
);

Instructions.displayName = "Instructions";

export default Instructions;
