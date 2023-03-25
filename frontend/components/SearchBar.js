import React, { Component } from "react";

import styles from "./Search.module.css";

export const SearchBar = ({ onChange }) => {
  return (
    <div className="searchInput">
      <input
        className={styles.search}
        type="text"
        onChange={onChange}
        placeholder="Search by the title ..."
      />
    </div>
  );
};

export default SearchBar;
