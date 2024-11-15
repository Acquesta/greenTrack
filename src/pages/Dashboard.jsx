import MenuDashboard from "../components/dashboard/MenuDashboard";
import MenuHeader from "../components/dashboard/MenuHeader";

import { useState } from "react";

import HomeDashboard from "../components/dashboard/HomeDashboard";

function Dashboard() {

    const notificacoes = [
        {
            id: 1,
            title: "Aviso de energia",
            description: "Você recebeu uma nova notificação",
            date: "2022-01-01",
        },
        {
            id: 2,
            title: "Nova notificação",
            description: "Você recebeu uma nova notificação",
            date: "2022-01-02",
        },
    ]

    const facilidades = [
        {
            id: 1,
            type: 'default',
            title: 'Produção',
            description: '50%',
            infos: {
                porcentagem: '+5%',
                descricao: 'a mais que mês passado'
            }
        },
        {
            id: 4,
            type: 'default',
            title: 'Produção',
            description: '32%',
            infos: {
                porcentagem: '-2%',
                descricao: 'a menos que mês passado'
            }
        },
        {
            id: 2,
            type: 'gauge',
            title: 'Pressão',
            infos: {
                porcentagem: 50,
                descricao: 'medidor de H2V'
            }
        },
        {
            id: 3,
            type: 'two',
            title: 'Próximo mês',
            infos: {
                porcentagem: '+10%',
                descricao: 'para os próximos 5 meses',
                previsao: '+50%'
            }
        },
    ]

    const [ menu, setMenu ] = useState(true)

    const handleMenu = () => {
        menu ? setMenu(false) : setMenu(true)
    }

    return (
        <div className="bg-[#141619]">
            <MenuDashboard mostraMenu={menu}/>
            <MenuHeader handleMenu={handleMenu} />
            <HomeDashboard notificacoes={notificacoes} facilidades={facilidades} />

        </div>
    );
}

export default Dashboard;