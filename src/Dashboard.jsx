import MenuDashboard from "./components/dashboard/MenuDashboard";
import MenuHeader from "./components/dashboard/MenuHeader";

import { useState } from "react";

import HomeDashboard from "./components/dashboard/HomeDashboard";
import { Outlet } from "react-router-dom";

function Dashboard() {

    const [ menu, setMenu ] = useState(true)

    const handleMenu = () => {
        menu ? setMenu(false) : setMenu(true)
    }

    return (
        <div className="bg-[#141619]">
            <MenuDashboard mostraMenu={menu}/>
            <MenuHeader handleMenu={handleMenu} />
            <Outlet />
        </div>
    );
}

export default Dashboard;