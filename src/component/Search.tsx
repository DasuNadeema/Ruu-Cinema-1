import React from "react";
import "../component/Search.css";

export default function () {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}
