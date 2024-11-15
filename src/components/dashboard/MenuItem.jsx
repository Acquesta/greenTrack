import { NavLink } from "react-router-dom";

export default function MenuItem({ svg, nome, link }) {
    return (
        <NavLink to={link} className="flex py-4 gap-4 cursor-pointer hover:bg-white/10 px-8">
            <img src={svg} alt="icone do item" />
            <h3 className="text-sm">{nome}</h3>
        </NavLink>
    )
}