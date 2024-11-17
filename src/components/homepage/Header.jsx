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
    const handleMenu = () => {
        isDropdownOpen ? setDropdownOpen(false) : setDropdownOpen(true)
    }

    return (
        <header className="flex fixed w-full bg-fundo items-center justify-between text-white px-16 py-4 z-10">

            <div className="flex w-auto h-10 my-3">
                <Link to="/" onClick={() => scrollToTop()}>
                    <img src={LogoGreenTrack} alt="Logo GreenTrack" className="h-full" />
                </Link>
            </div>
            <nav className="relative uppercase">
                <ul className="space-x-20 lg:flex hidden">
                    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <NavLink to="/" onClick={() => scrollToTop()}>Home</NavLink>
                        <ul className={`${isDropdownOpen ? "opacity-100" : "opacity-0"} absolute bg-fundo/80 w-64
                             p-4 rounded-lg left-[-100px]`}>
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
                    </li>
                    <li><NavLink to='/Dashboard'>Dashboard</NavLink></li>
                    <li><NavLink to='/Contact'>Contato</NavLink></li>
                </ul>
            </nav>
            <div className="flex gap-10 items-center">
                <div>
                    {/* <Switch /> */}
                </div>
                <div className="align-center px-7 py-3 rounded-full leading-none bg-azul hover:bg-white hover:text-azul hover:font-medium cursor-pointer">
                    <Link to='/Login'>LOGIN</Link>
                </div>
            </div>
            <div className="lg:hidden">

                <div onClick={() => handleMenu()} className="lg:hidden flex flex-col gap-1 cursor-pointer">
                    <div className="h-1 w-9 bg-white rounded-full"></div>
                    <div className="h-1 w-9 bg-white rounded-full"></div>
                    <div className="h-1 w-9 bg-white rounded-full"></div>
                </div>
                <ul className={`${isDropdownOpen ? "opacity-100" : "opacity-0"} absolute bg-fundo/80 w-64
                             p-4 rounded-lg right-5 mt-6`}>

                    <li>
                        <a href="/" onClick={() => scrollToTop()} className="block px-10 py-4 font-bold">Home</a>
                    </li>
                    <li>
                        <a href="#Dores" className="block px-10 py-4 ">Dores</a>
                    </li>
                    <li>
                        <a href="#Importancia" className="block px-10 py-4 ">Importância</a>
                    </li>
                    <li>
                        <a href="#Tecnologia" className="block px-10 py-4 ">Tecnologia</a>
                    </li>
                    <li>
                        <a href="#Sugestoes" className="block px-10 py-4 ">Sugestões</a>
                    </li>
                    <li>
                        <a href='/Dashboard' className="block px-10 py-4 font-bold text-verde">Dashboard</a>
                    </li>
                    <li>
                        <a href='/Contact' className="block px-10 py-4 font-bold">Contato</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}