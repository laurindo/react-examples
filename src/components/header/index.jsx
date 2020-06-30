import React from "react";
import '../../App.css';
function Header(props) {
  const path = props.location.pathname;
  return (
    <header className="header">
      <img
        src="https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_411/v1593283625/ei.garotos.games/logo-fortnite.png"
        alt="fortnite logo"
        className="headerImg"
      />
      <ul className="headerMenu">
        <li className={path === "/" ? "active" : ""}><a href="/">Home</a></li>
        <li className={path === "/historia" ? "active" : ""}><a href="/#/historia">História</a></li>
        <li className={path === "/torneios" ? "active" : ""}><a href="/#/torneios">Torneios</a></li>
        <li className={path === "/mapas" ? "active" : ""}><a href="/#/mapas">Mapas</a></li>
        <li className={path === "/pontos-de-interesse" ? "active" : ""}><a href="/#/pontos-de-interesse">Pontos de Interesse</a></li>
      </ul>
    </header>
  );
}

export default Header;
