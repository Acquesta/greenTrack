import { NavLink, Link } from "react-router-dom";
import React, { useState } from 'react';
import LogoGreenTrack from '../../assets/LogoGreenTrack.png';
import Switch from "./Botao";

export default function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => setDropdownOpen(true);
    const handleMouseLeave = () => setDropdownOpen(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <header className="flex fixed w-full bg-fundo items-center justify-between text-white px-16 py-4 z-10">
            <div className="flex w-auto h-10 my-3">
                <Link to="/" onClick={() => scrollToTop()}>
                    <img src={LogoGreenTrack} alt="Logo GreenTrack" className="h-full" /> 
                </Link>
            </div>
            <nav className="relative uppercase">
                <ul className="flex space-x-20">
                    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <NavLink to="/" onClick={() => scrollToTop()}>Home</NavLink>
                        {isDropdownOpen && (
                            <ul className="absolute bg-fundo/80 w-64
                             p-4 rounded-lg left-[-100px]">
                                <li>
                                    <a href="#Dores" className="block px-10 py-4 hover:bg-gradient-to-r from-verde to-azul rounded-lg">Dores</a>
                                </li>
                                <li>
                                    <a href="#Importancia" className="block px-10 py-4 hover:bg-gradient-to-r from-verde to-azul rounded-lg">Importância</a>
                                </li>
                                <li>
                                    <a href="#Tecnologia" className="block px-10 py-4 hover:bg-gradient-to-r from-verde to-azul rounded-lg">Tecnologia</a>
                                </li>
                                <li>
                                    <a href="#Sugestoes" className="block px-10 py-4 hover:bg-gradient-to-r from-verde to-azul rounded-lg">Sugestões</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li><NavLink to='/Login'>Dashboard</NavLink></li>
                    <li><NavLink to='/Contact'>Contato</NavLink></li>
                </ul>
            </nav>
            <div className="flex gap-10 items-center">
                <div>
                    <Switch />
                </div>
                <div className="align-center px-7 py-3 rounded-full leading-none bg-azul hover:bg-white hover:text-azul hover:font-medium cursor-pointer">
                    <Link to='/Login'>LOGIN</Link>
                </div>
            </div>
        </header>
    );
}