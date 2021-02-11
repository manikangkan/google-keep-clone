import React from "react";
import("./App.css");

export default function Footer() {
  const getYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © | {getYear} | Manikangkan Das</p>
    </footer>
  );
}
