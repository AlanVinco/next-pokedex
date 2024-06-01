import Image from "next/image";
import Link from "next/link";

import 'animate.css';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">MISSIGNO 404</h1>
        <div className="animate__animated animate__tada animate__infinite	infinite">
            <Image
            src="/images/missigno.png"
            width={500}
            height={500}
            loading="lazy"
            alt="Picture of the author"
            />
        </div>
        <p className="text-gray-700 mb-4 font-bold">Ataque:??????</p>
        <p className="text-gray-700 mb-4 font-bold">Defensa:¿¿¿¿¿</p>
        <p className="text-gray-700 mb-4">Página no encontrada.</p>
        <Link href="/pokedex" className="text-white text-xl bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
            Volver a la Pokédex</Link>
    </div>
    </div>
  );
}
