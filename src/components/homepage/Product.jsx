import imagem from "../../assets/dash.png"

import React, { useState } from "react";

const Product = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };


    return (

        <section className=" h-auto flex flex-col mx-5 lg:flex-row items-center justify-around gap-10 text-white pt-32 md:px-16" id="Product">
            <div>
                <h2 className="text-center text-xl font-bold text-white mb-6">Ative para <strong className="text-verde">iluminar</strong> um novo jeito de visualizar o H2V</h2>
                <article class="w-48 mx-auto aspect-video rounded-xl has-[:checked]:bg-verde bg-white border-4 border-[#121331]">

                    <div class="flex h-full w-full px-2 items-center gap-x-2">
                        <div
                            class="w-6 h-6 flex-shrink-0 rounded-full border-4 border-[#121331]"
                        ></div>
                        <label
                            for="switch"
                            class="has-[:checked]:scale-x-[-1] w-full h-10 border-4 border-[#121331] rounded cursor-pointer"
                        >
                            <input type="checkbox" id="switch" class="hidden" onClick={() => handleToggle()} />
                            <div class="w-full h-full bg-cinzaescuro relative">
                                <div
                                    class="w-0 h-0 z-20 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[20px] border-t-[#121331] relative"
                                >
                                    <div
                                        class="w-0 h-0 absolute border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[15px] border-t-cinzaescuro -top-5 -left-[18px]"
                                    ></div>
                                </div>
                                <div
                                    class="w-[24px] h-9 z-10 absolute top-[9px] left-0 bg-cinzaescuro border-r-2 border-b-4 border-[#121331] transform skew-y-[39deg]"
                                ></div>
                                <div
                                    class="w-[25px] h-9 z-10 absolute top-[9px] left-[24px] bg-cinzaescuro border-r-4 border-l-2 border-b-4 border-[#121331] transform skew-y-[-39deg]"
                                ></div>
                            </div>
                        </label>
                        <div class="w-6 h-1 flex-shrink-0 bg-[#121331] rounded-full"></div>

                    </div>

                </article></div>

            <section
                className={` w-3/4 h-3/4 bg-cover  bg-center transition-opacity duration-500 ${isOn ? "opacity-100" : "opacity-0"}`}>
                <div className="flex items-center flex-col lg:flex-row gap-8 h-full  text-white">
                    <img src={imagem} alt="" className="w-full lg:w-1/2 h-auto" />
                    <div className="flex flex-col mx-10 gap-4 items-center">
                        <h2 className="text-center text-4xl font-bold text-verde uppercase">Dashboard GreenTrack</h2>
                        <p className="text-center">Nosso dashboard é um facilitador para o monitoramento completo da produção do Hidrogênio Verde, contando com:</p>
                        <ul className="">
                            <li>- Visualização em tempo real;</li>
                            <li>- Avisos preventivos e manutenção;</li>
                            <li>- Análise de dados;</li>
                            <li>- Previsão com IA.</li>
                        </ul>
                        <a className="bg-verde bg-gradient-to-br from-verdeescuro/50 via-verde to-verdeescuro/50 py-4 px-8 text-center text-white rounded-xl flex justify-self-center text-2xl mt-4 hover:text-verde hover:font-bold hover:bg-gradient hover:from-white hover:to-white" href="/Login">
                            Conheça o Dashboard
                        </a>
                    </div>
                </div>
            </section>

        </section>
    );
};

export default Product;
