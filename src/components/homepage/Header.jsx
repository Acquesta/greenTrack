import { NavLink, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LogoGreenTrack from "../../assets/LogoGreenTrack.png";
import * as Icon from "react-feather";

export default function Header() {
  const [logado, setLogado] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setLogado(user);
  }, []);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleMenu = () => {
    isDropdownOpen ? setDropdownOpen(false) : setDropdownOpen(true);
  };

  const deslogar = () => {
    setLogado(null);
    localStorage.removeItem("user");
  };

  return (
    <header className="flex fixed w-full bg-fundo items-center justify-between text-white px-6 sm:px-16 py-4 z-30">
      <div className="flex w-auto h-10 my-3">
        <Link to="/" onClick={() => scrollToTop()}>
          <img src={LogoGreenTrack} alt="Logo GreenTrack" className="h-full" />
        </Link>
      </div>
      <nav className="relative uppercase">
        <ul className="space-x-20 lg:flex hidden ">
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <NavLink to="/" onClick={() => scrollToTop()}>
              Home
            </NavLink>
            <ul
              className={`${
                isDropdownOpen ? "block" : "hidden"
              } absolute bg-fundo/80  w-64
                            p-4 rounded-lg left-[-100px]`}
            >
              <li>
                <a
                  href="#Product"
                  className="block px-10 py-4 hover:bg-gradient-to-r from-verde to-azul rounded-lg"
                >
                  Projeto
                </a>
              </li>
              <li>
                <a
                  href="#Dores"
                  className="block px-10 py-4 hover:bg-gradient-to-r from-verde to-azul rounded-lg"
                >
                  Dores
                </a>
              </li>
              <li>
                <a
                  href="#Importancia"
                  className="block px-10 py-4 hover:bg-gradient-to-r from-verde to-azul rounded-lg"
                >
                  Importância
                </a>
              </li>
              <li>
                <a
                  href="#Tecnologia"
                  className="block px-10 py-4 hover:bg-gradient-to-r from-verde to-azul rounded-lg"
                >
                  Tecnologia
                </a>
              </li>
              <li>
                <a
                  href="#Sugestoes"
                  className="block px-10 py-4 hover:bg-gradient-to-r from-verde to-azul rounded-lg"
                >
                  Sugestões
                </a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/Login">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contato</NavLink>
          </li>
        </ul>
      </nav>
      {!logado ? (
        <div className="gap-10 items-center hidden lg:flex">
          <Link to="/Login">
            <div className="flex gap-4 items-center px-7 py-3 rounded-full leading-none hover:bg-white hover:text-verde hover:font-medium cursor-pointer">
              <Icon.UserCheck />
              Login
            </div>
          </Link>

          <Link to="/Cadastro">
            <div className=" flex gap-4 items-center px-7 py-3 rounded-full leading-none bg-azul hover:bg-white hover:text-azul hover:font-medium cursor-pointer">
              <Icon.UserPlus />
              Registre-se
            </div>
          </Link>
        </div>
      ) : (
        <div
          onClick={() => deslogar()}
          className="align-center px-7 py-3 rounded-full leading-none bg-azul hover:bg-white hover:text-azul hover:font-medium cursor-pointer"
        >
          Deslogar
        </div>
      )}
      <div className="lg:hidden">
        <div
          onClick={() => handleMenu()}
          className="lg:hidden flex flex-col gap-1 cursor-pointer"
        >
          <div className="h-1 w-9 bg-white rounded-full"></div>
          <div className="h-1 w-9 bg-white rounded-full"></div>
          <div className="h-1 w-9 bg-white rounded-full"></div>
        </div>
        <ul
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } absolute bg-fundo/90 w-full p-4 rounded-lg right-0 mt-6 text-center`}
        >
          <li>
            <a
              href="/"
              onClick={() => scrollToTop()}
              className="block px-10 py-4 font-bold"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#Product" className="block px-10 py-4 ">
              Projeto
            </a>
          </li>
          <li>
            <a href="#Dores" className="block px-10 py-4 ">
              Dores
            </a>
          </li>
          <li>
            <a href="#Importancia" className="block px-10 py-4 ">
              Importância
            </a>
          </li>
          <li>
            <a href="#Tecnologia" className="block px-10 py-4 ">
              Tecnologia
            </a>
          </li>
          <li>
            <a href="#Sugestoes" className="block px-10 py-4 ">
              Sugestões
            </a>
          </li>
          <li>
            <a href="/Login" className="block px-10 py-4 font-bold text-verde">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/Contact" className="block px-10 py-4 font-bold">
              Contato
            </a>
          </li>

          <div className="border-t px-14 sm:px-40 py-4 flex justify-between items-center">
            {!logado ? (
              <>
                <li>
                  <a href="/Login" className="flex flex-col items-center">
                    <Icon.UserCheck />
                    Login
                  </a>
                </li>
                <li>
                  <a href="/Cadastro" className="flex flex-col items-center">
                    <Icon.UserPlus />
                    Registre-se
                  </a>
                </li>
              </>
            ) : (
              <li className="mx-auto">
                <p onClick={() => deslogar()} className="flex flex-col items-center">
                  Deslogar
                </p>
              </li>
            )}
          </div>
        </ul>
      </div>
    </header>
  );
}
