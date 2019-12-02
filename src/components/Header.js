import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
        <a href="#" className="navbar-brand">
          <img src="./ruby2.png" width="30"></img>
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#webmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="webmenu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Instalação
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Conexão
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Exemplos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
