"use client";

import { useState } from "react";

export default function CardMenu({ stats, moves, abilities }: { stats:any, moves:any, abilities:any}) {

    const [showSection, setShowSection] = useState(true)

  return (
    <div className="text-black">
      <ul
        className=" text-sm font-medium text-center rounded-lg sm:flex rtl:divide-x-reverse"
        id="fullWidthTab"
        data-tabs-toggle="#fullWidthTabContent"
        role="tablist"
      >
        <li className="w-full">
          <button
            onClick={() => setShowSection(true)}
            id="stats-tab"
            data-tabs-target="#stats"
            type="button"
            role="tab"
            aria-controls="stats"
            aria-selected="true"
            className="inline-block w-full p-4 rounded-ss-lg hover:bg-[#f0503c] focus:outline-none font-bold"
          >
            Estadísticas
          </button>
        </li>
        <li className="w-full">
          <button
            onClick={() => setShowSection(false)}
            id="about-tab"
            data-tabs-target="#about"
            type="button"
            role="tab"
            aria-controls="about"
            aria-selected="false"
            className="inline-block w-full p-4 rounded-ss-lg hover:bg-[#f0503c] focus:outline-none font-bold"
          >
            Movimientos
          </button>
        </li>
      </ul>
      {showSection ? 
      <div className="flex flex-col items-center">
      <div className="w-full max-w-[800px] shadow-md p-[20px] rounded-lg">
        <div className="flex items-center mb-[10px]">
          <div
            className="bar"
            style={{ width: `${stats[1].base_stat}vmin` }}
            title="ataque"
          ></div>
          <span className="label">{`Ataque (${stats[1].base_stat})`}</span>
        </div>
        <div className="flex items-center mb-[10px]">
          <div
            className="bar"
            style={{ width: `${stats[2].base_stat}vmin` }}
            title="defensa"
          ></div>
          <span className="label">{`Defensa (${stats[2].base_stat})`}</span>
        </div>
      </div>
    </div>
    :
    <div>
        <div className="p-[20px] flex flex-wrap w-4/5 mx-auto justify-center items-center border-[30px] border-solid border-[#f0503c]">
            {moves?.map((elements:any) => (
                <div key={elements.move.name} className="habilities-box animate__animated animate__pulse animate__infinite	infinite">
                    {`${elements.move.name.charAt(0).toUpperCase()}${elements.move.name.slice(1)}`}
                </div>
            ))}
        </div>
    </div>}
      
    </div>
  );
}
