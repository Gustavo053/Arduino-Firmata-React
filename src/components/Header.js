import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
        <Link to="/" className="navbar-brand">
          <img src="./images/ruby2.png" width="30"></img>
        </Link>
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
              <Link to="/" className="nav-link">
                Página Inicial
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/instalacao" className="nav-link">
                Instalação
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/conexao" className="nav-link">
                Conexão
              </Link>
            </li>
            <li className="nav-item">
              <Link to="exemplos" className="nav-link">
                Exemplos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
