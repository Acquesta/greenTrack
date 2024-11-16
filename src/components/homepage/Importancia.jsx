import { useRef } from "react";
import efeito from "../../assets/efeito.png"
import { useState } from "react";
import { useEffect } from "react";


function Importancia() {

  const [divSize, setDivSize] = useState({ width: 0, height: 0 });
  const scrollContainerRef = useRef(null);
  const scrollDireita = (direcao) => {
    if (direcao == 'left') {
      scrollContainerRef.current.scrollBy({ left: -divSize.width, behavior: 'smooth' });
    } else {
      scrollContainerRef.current.scrollBy({ left: divSize.width, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    if (scrollContainerRef.current) {
      const { width, height } = scrollContainerRef.current.getBoundingClientRect();
      setDivSize({ width, height });
    }
  }, []);

console.log(divSize)

  return (
    <>
      <div className="relative  bg-verde" id="Importancia">
        <img src={efeito} alt="efeitos coloridos" className="pointer-events-none z-0 absolute object-cover efeito-imagem" />
      </div>

      <div className="text-white">
        <h1>Importancia</h1>
        <p>energias renovaveis</p>
      </div>


      <div ref={scrollContainerRef} className="flex overflow-scroll overflow-y-hidden max-w-[90vw] mx-auto overflow-x-hidden">
        <div className="min-w-[90vw] bg-azul h-[50vh] ">

        </div>
        <div className="min-w-[90vw] bg-verde h-[50vh]">

        </div>
        <div className="min-w-[90vw] bg-azul h-[50vh] ">

        </div>
      </div>
      <div className="text-white">
        <button onClick={() => scrollDireita('left')}>esquerda</button>
        <button onClick={() => scrollDireita('right')}>direita</button>
      </div>

    </>
  );
}

export default Importancia;