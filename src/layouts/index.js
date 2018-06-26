import React from "react";

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <h3>MySagaSite</h3>
    {children()}
  </div>
