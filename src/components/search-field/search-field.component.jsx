import React from "react";
import "./search-field.styles.css";

export const Search = ({ key, placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    key={key}
    onChange={handleChange}
  />
);
