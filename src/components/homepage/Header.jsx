import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import LogoGreenTrack from '../../assets/LogoGreenTrack.png'

export default function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => setDropdownOpen(true);
    const handleMouseLeave = () => setDropdownOpen(false);


    return (
        <header className="flex items-center justify-around text-white">
            <div className="">
                <img src={LogoGreenTrack} alt="Logo GreenTrack" />
            </div>
            <nav className="relative ">
                <ul className="flex justify-center align-center ">
                    <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <NavLink to='/'>Home</NavLink>
                        {isDropdownOpen && (
                            <ul className="absolute">
                                <li>
                                    <a href="#Dores">Dores</a>
                                </li>
                                <li>
                                    <a href="#Importancia">Importância</a>
                                </li>
                                <li>
                                    <a href="#Tecnologia">Tecnologia</a>
                                </li>
                                <li>
                                    <a href="#Sugestoes">Sugestões</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li><NavLink to='/Dashboard'>Dashboard</NavLink></li>
                    <li><NavLink to='/Contact'>Contato</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}
