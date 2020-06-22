import React from 'react'
import logo from "../GitHub-Mark-Light-120px-plus.png";
import SearchBar from './searchbar';
import Content from './content';

const Header = () => {
    return ( 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Search for your favorite users{" "}
              <span role="img" aria-label="laugh-emoji">
                😄
              </span>
            </p>
            <SearchBar/>
            <Content/>
        </header>
     );
}
 
export default Header;