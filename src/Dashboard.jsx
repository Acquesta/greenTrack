import MenuDashboard from "./components/dashboard/MenuDashboard";
import MenuHeader from "./components/dashboard/MenuHeader";

import { useState } from "react";

import { Outlet } from "react-router-dom";

function Dashboard() {

    const [ menu, setMenu ] = useState(true)

    const handleMenu = () => {
        menu ? setMenu(false) : setMenu(true)
    }

    const temaAntigo = JSON.parse(localStorage.getItem('tema')) || 'dark'
    const [themeMode, setThemeMode] = useState(temaAntigo)
    localStorage.setItem('tema', JSON.stringify(themeMode))

    const trocaTema = () => {
        if (themeMode === 'dark'){
            setThemeMode('light') 
            localStorage.setItem('tema', JSON.stringify('light')) 
        } 
        else {
            setThemeMode('dark')
            localStorage.setItem('tema', JSON.stringify('dark'))
        } 
        console.log(themeMode);
    }

    return (
        <div className={`bg-[${themeMode == 'light' ? '#ECECEC' : '#141619'}] transition-all`}>
            <MenuDashboard themeMode={themeMode} mostraMenu={menu}/>
            <MenuHeader trocaTema={trocaTema} handleMenu={handleMenu} themeMode={themeMode} />
            <Outlet />
        </div>
    );
}

export default Dashboard;