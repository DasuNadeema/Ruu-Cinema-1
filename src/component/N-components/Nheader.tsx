import React from "react";
import NavListItem from "../NavListItem";
import "../N-components/n-header.css";
import Search from "../Search";
import Logo from "../featured_channel.jpg";

export default function Header() {
  return (
    <header className="n-header">
      <a href="" className="logo">
        <img src={Logo} alt="" />
      </a>

      {/* <ul className="nav">
        {navListData.map((nav) => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul> */}
      <Search />
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="menu">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>
      <NavListItem />

      {/* <button>
        <a href="#">Sign in</a>
      </button> */}
    </header>
  );
}
