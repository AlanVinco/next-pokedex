import 'animate.css';

import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  
  return (
    <main className="md:bg-gradient-to-r bg-gradient-to-b from-[#EE8130] via-[#6390F0] to-[#7AC74C]">
      <div className="md:flex p-5">
        <div className="p-1">
          <Image className="animate__animated animate__pulse animate__infinite	infinite" loading="lazy" draggable="false" width="636" height="636" src="/images/charizard_final.png" alt="charizard.png"/>
        </div>
        <div className="p-1">
          <Image className="animate__animated animate__pulse animate__infinite	infinite" loading="lazy" draggable="false" width="636" height="636" src="/images/squirtle_final.png" alt="squirtle.png"/>
        </div>
        <div className="p-1">
          <Image className="animate__animated animate__pulse animate__infinite	infinite" loading="lazy" draggable="false" width="636" height="636" src="/images/ivysaur_final.png" alt="ivysaur.png"/>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center w-full py-4">
        <Image className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl object-cover" loading="lazy" draggable="false" height="108" width="300" sizes="(min-width: 50px) 100vw," src="/images/pokelogo.png" alt="PokéLogo"/>
        <Link
        href="/pokedex" 
        className="text-white text-xl bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
          Pokédex
        </Link>
      </div>
    </main>
  );
}
