import MenuItem from "./MenuItem";

import relogio1 from "../../assets/v2.svg";
import bateria1 from "../../assets/Union.svg";
import ferramentas1 from "../../assets/Union1.svg";
import grafico1 from "../../assets/reception-4.svg";
import arvore1 from "../../assets/tree.svg";
import data1 from "../../assets/clipboard-data.svg";

import relogio2 from "../../assets/v22.svg";
import bateria2 from "../../assets/Union2.svg";
import ferramentas2 from "../../assets/Union12.svg";
import grafico2 from "../../assets/reception-42.svg";
import arvore2 from "../../assets/tree2.svg";
import data2 from "../../assets/clipboard-data2.svg";

import greenTrackLogo from "../../assets/greenTrack.svg";
import greenTrackLogoDark from "../../assets/greenTrackDark.svg";

import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MenuDashboard({ mostraMenu, themeMode }) {
  const { id } = useParams();

  const ususarios = JSON.parse(localStorage.getItem("Usuarios"));
  const usuario = ususarios[id];

  const [colors, setColors] = useState({
    fundo: "#202731",
    texto: "white",
    svg: [relogio1, bateria1, ferramentas1, data1, grafico1, arvore1],
  });

  useEffect(() => {
    if (themeMode == "dark") {
      setColors({
        fundo: "[#202731]",
        texto: "white",
        svg: [relogio1, bateria1, ferramentas1, data1, grafico1, arvore1],
        logo: greenTrackLogo
      });
    } else {
      setColors({
        fundo: "white",
        texto: "fundo",
        svg: [relogio2, bateria2, ferramentas2, data2, grafico2, arvore2],
        logo: greenTrackLogoDark
      });
    }
  }, [themeMode]);

  const menuItens = [
    {
      svg: colors.svg[0],
      nome: "Tempo real",
      link: `/Dashboard/${id}/tempoReal`,
    },
    {
      svg: colors.svg[1],
      nome: "Eficiência",
      link: `/Dashboard/${id}/eficiencia`,
    },
    {
      svg: colors.svg[2],
      nome: "Manutenção",
      link: `/Dashboard/${id}/manutencao`,
    },
    {
      svg: colors.svg[3],
      nome: "Análise Histórica",
      link: `/Dashboard/${id}/analise`,
    },
    {
      svg: colors.svg[4],
      nome: "Previsão",
      link: `/Dashboard/${id}/previsao`,
    },
    {
      svg: colors.svg[5],
      nome: "Sustentabilidade",
      link: `/Dashboard/${id}/sustentabilidade`,
    },
  ];   

  return (
    <div
      className={`${
        mostraMenu ? "opacity-100" : "opacity-0 "
      } lg:opacity-100 z-20 fixed w-2/3 max-lg:top-14 lg:fixed bg-${
        colors.fundo
      } lg:w-[15vw] h-[100vh] pt-6 text-${
        colors.texto
      } lg:flex flex-col justify-between`}
    >
      <div>
        <NavLink
          to="/"
          className="text-2xl font-bold uppercase text-white text-center"
        >
          <img
            src={colors.logo}
            alt="logo da greenTrack"
            className="h-[10vw] md:h-[3vw] mx-auto"
          />
        </NavLink>
        <NavLink
          to={`/Dashboard/${id}/home`}
          className="my-10 py-3 flex justify-around items-center cursor-pointer bg-gradient-to-r from-[#1EBF49] to-[#315367] hover:to-[#1EBF49] transition-colors"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4861 1.57636C11.2177 1.30788 10.7823 1.30788 10.5139 1.57636L2.26386 9.82636C2.13493 9.9553 2.0625 10.1302 2.0625 10.3125V19.9375C2.0625 20.3172 2.3703 20.625 2.75 20.625H8.9375C9.3172 20.625 9.625 20.3172 9.625 19.9375V14.4375H12.375V19.9375C12.375 20.3172 12.6828 20.625 13.0625 20.625H19.25C19.6297 20.625 19.9375 20.3172 19.9375 19.9375V10.3125C19.9375 10.1302 19.8651 9.9553 19.7361 9.82636L17.875 7.96523V3.4375C17.875 3.0578 17.5672 2.75 17.1875 2.75H15.8125C15.4328 2.75 15.125 3.0578 15.125 3.4375V5.21523L11.4861 1.57636ZM3.4375 19.25V10.5973L11 3.03477L18.5625 10.5973V19.25H13.75V13.75C13.75 13.3703 13.4422 13.0625 13.0625 13.0625H8.9375C8.5578 13.0625 8.25 13.3703 8.25 13.75V19.25H3.4375Z"
              fill="white"
            />
          </svg>
          <h3 className="text-xl text-white">Dashboard</h3>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z"
              fill="white"
            />
          </svg>
        </NavLink>
        <div className="h-auto">
          <h3 className="text-xl font-light px-8 my-3">Funcionalidades</h3>
          <div className="flex flex-col gap-1">
            {menuItens.map((item) => (
              <MenuItem svg={item.svg} nome={item.nome} link={item.link} themeMode={themeMode}/>
            ))}
          </div>
        </div>
      </div>
      <div className={`bottom-5 flex items-center justify-center gap-5 px-auto py-6 border-t-2 border-${themeMode == 'dark' ? 'white' : 'verde'} `}>
        {/* <div className="w-10 h-10 hidden xl:block bg-slate-300 rounded-full">
            
        </div> */}
        <div className={`text-${colors.texto}`}>
          <h3 className="text-base font-bold">Nome: {usuario.nome}</h3>
          <h3 className="text-base font-light">Email: {usuario.email}</h3>
        </div>
      </div> 
      
    </div>
  );
}
