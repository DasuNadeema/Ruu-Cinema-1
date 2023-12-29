import React from "react";
import NavListItem from "./NavListItem";
import navListData from "../data/navListDate";
import "../component/Header.css";
import Search from "./Search";
import Logo from "./featured_channel.jpg";

export default function Header() {
  return (
    <header>
      <a href="" className="logo">
        <img src={Logo} alt="" />
      </a>

      <Search />
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="menu">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>
      <NavListItem />
    </header>
  );
}
