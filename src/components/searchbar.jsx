import React from "react";

const SearchBar = () => {
  return (
    <div className="App-search-container">
      <input
        type="text"
        className="App-input-search"
        placeholder="Github username"
      ></input>
      <button type="submit" className="App-button-search">
        Search{" "}
        <span role="img" aria-label="seach-emoji">
          🔍
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
