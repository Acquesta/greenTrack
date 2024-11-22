import { NavLink, Link } from "react-router-dom";
import React, { useState } from 'react';
import LogoGreenTrack from '../../assets/LogoGreenTrack.png';
import * as Icon from 'react-feather';

export default function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => setDropdownOpen(true);
    const handleMouseLeave = () => setDropdownOpen(false);

    const toggleMenu = () => setDropdownOpen(prevState => !prevState);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="flex fixed w-full bg-fundo items-center justify-between text-white px-6 sm:px-16 py-4 z-30">
            <div className="flex w-auto h-10 my-3">
                <Link to="/" onClick={scrollToTop} >
                    <img src={LogoGreenTrack} alt="Logo GreenTrack" className="h-full" />
                </Link>
            </div>

            <nav className="relative uppercase">
                <ul className="space-x-20 lg:flex hidden">
                    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative">
                        <NavLink to="/" onClick={scrollToTop} className="block">Home</NavLink>
                        {isDropdownOpen && (
                            <ul className="absolute bg-fundo/80 w-64 p-4 rounded-lg left-[-100px]">
                                <li><a href="#Product" className="block px-10 py-4 hover:bg-gradient-to-r from-verde to-azul rounded-lg">Projeto</a></li>
                                <li><a href="#Dores" className="block px-10 py-4 hover:bg-gradient-to-r from-verde to-azul rounded-lg">Dores</a></li>
                                <li><a href="#Importancia" className="block px-10 py-4 hover:bg-gradient-to-r from-verde to-azul rounded-lg">Importância</a></li>
                                <li><a href="#Tecnologia" className="block px-10 py-4 hover:bg-gradient-to-r from-verde to-azul rounded-lg">Tecnologia</a></li>
                                <li><a href="#Sugestoes" className="block px-10 py-4 hover:bg-gradient-to-r from-verde to-azul rounded-lg">Sugestões</a></li>
                            </ul>
                        )}
                    </li>
                    <li><NavLink to="/Login" onClick={scrollToTop}>Dashboard</NavLink></li>
                    <li><NavLink to="/Contact" onClick={scrollToTop}>Contato</NavLink></li>
                </ul>
            </nav>

            <div className="gap-10 items-center hidden lg:flex">
                <Link to="/Login">
                    <div className="flex gap-4 items-center px-7 py-3 rounded-full leading-none hover:bg-white hover:text-verde hover:font-medium cursor-pointer">
                        <Icon.UserCheck />
                        Login
                    </div>
                </Link>
                <Link to="/Cadastro">
                    <div className="flex gap-4 items-center px-7 py-3 rounded-full leading-none bg-azul hover:bg-white hover:text-azul hover:font-medium cursor-pointer">
                        <Icon.UserPlus />
                        Registre-se
                    </div>
                </Link>
            </div>

            <div className="lg:hidden">
                <button onClick={toggleMenu} className="flex flex-col gap-1 cursor-pointer">
                    <div className="h-1 w-9 bg-white rounded-full"></div>
                    <div className="h-1 w-9 bg-white rounded-full"></div>
                    <div className="h-1 w-9 bg-white rounded-full"></div>
                </button>
                {isDropdownOpen && (
                    <ul className="absolute bg-fundo/90 w-full p-4 rounded-lg right-0 mt-6 text-center">
                        <li><NavLink to="/" onClick={scrollToTop} className="block px-10 py-4 font-bold">Home</NavLink></li>
                        <li><a href="#Product" className="block px-10 py-4">Projeto</a></li>
                        <li><a href="#Dores" className="block px-10 py-4">Dores</a></li>
                        <li><a href="#Importancia" className="block px-10 py-4">Importância</a></li>
                        <li><a href="#Tecnologia" className="block px-10 py-4">Tecnologia</a></li>
                        <li><a href="#Sugestoes" className="block px-10 py-4">Sugestões</a></li>
                        <li><NavLink to="/Dashboard" className="block px-10 py-4 font-bold text-verde">Dashboard</NavLink></li>
                        <li><NavLink to="/Contact" className="block px-10 py-4 font-bold">Contato</NavLink></li>
                        <div className="border-t px-14 sm:px-40 py-4 flex justify-between">
                            <li><NavLink to="/Login" className="flex flex-col items-center"><Icon.UserCheck />Login</NavLink></li>
                            <li><NavLink to="/Cadastro" className="flex flex-col items-center"><Icon.UserPlus />Registre-se</NavLink></li>
                        </div>
                    </ul>
                )}
            </div>
        </section>
    );
}
