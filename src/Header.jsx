import React from "react";
import("./App.css");

export default function Header() {
  return (
    <div className="header">
      <div className="header__inner">
        <img src={process.env.PUBLIC_URL + "/images/mdLogo.png"} alt="logo" />

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="https://github.com/manikangkandas">Github</a>
          </li>
          <li>
            <a href="https://codepen.io/manikangkandas">Codepen</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
