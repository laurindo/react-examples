import React from "react";
import '../../App.css';

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>© {new Date().getFullYear()}, Fortnite Brazil é uma página reservada ao compartilhamento de informações relevantes ao jogo Fortnite.</li>
      </ul>
    </div>
  );
}

export default Footer;
