import Image from 'next/image'
import GoogleTranslate from '@/app/components/translate'
import CardMenu from '@/app/components/cardMenu'
import Link from 'next/link'
import 'animate.css';
import { redirect } from 'next/navigation'

export default async function page({ params }:{ params: {pokemonId: string}}) {
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`)

    if (!res.ok) {
        redirect("/missigno")
      }

    const pokemonInformation = await res.json()

    const  { name, stats, moves, abilities, sprites } = pokemonInformation
    
  return (
    <div className="bg-slate-300">
        <div className='flex justify-center flex-col'>
            <GoogleTranslate />
        </div>
        <div className="min-h-screen flex flex-col items-center justify-center">
            
            <div className="w-full md:max-w-3xl rounded-lg shadow-xl bg-card-pokemon">
                <div className='flex justify-center'>
                    <div className="w-52 h-52 text-center m-1.5 rounded-full bg-[#F3EEF5] shadow-2xl animate__animated animate__tada animate__infinite	infinite">
                        <Image src={sprites.other.showdown.front_default}
                        width={300}
                         height={300}
                        loading="lazy"
                        alt="Pokemon front"/>
                    </div>
                </div>
                <div className="p-5 text-black">
                    <div className='flex justify-center'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                            {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
                        </h5>
                    </div>
                    <div className='animate__animated animate__pulse animate__infinite	infinite'>
                        <Link href="/pokedex">
                            <Image 
                            src="/images/back-icon.png"
                            width={50}
                            height={50}
                            loading="lazy"
                            alt="icono regresar"/>
                        </Link>
                    </div>
                    <p className="mb-3 font-bold">
                        Habilidades:
                    </p>
                    <div className="text-gray-700/80 underline">
                    {abilities?.map((elements:any) => (
                        <div key={elements.ability.name} className="">
                            {`${elements.ability.name.charAt(0).toUpperCase()}${elements.ability.name.slice(1)}`}
                        </div>
                    ))}
                    </div>
                </div>
                <CardMenu stats={stats} moves={moves} abilities={abilities}/>
            </div>

        </div>
    </div>
  )
}

