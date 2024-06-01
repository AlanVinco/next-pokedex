'use client'

import { useState } from "react"
import Image from 'next/image'
import { PokemonData } from "../interfaces/pokemonType"
import Link from "next/link"

export default function Table({ searchPokemon }: { searchPokemon: string}) {

    const [allDataPokemon, setAllDataPokemon] = useState([])
    const [pokemonError, setPokemonError] = useState(false) 

    const fetchPokemonSearch = async () => {

      let parseText = searchPokemon.replace(/[^a-zA-Z]/g, '').toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/type/${parseText}`);
        
        if (!response.ok) {
          setPokemonError(true)
        }
        else{
            const data = await response.json();
            setPokemonError(false)
            const namePokemons = data.pokemon.map((elements : any) => ( elements.pokemon.name))
            const urlPokemons = data.pokemon.map((elements : any) => ( elements.pokemon.url))
            const idPokemons =  urlPokemons.map((elements : any) => ( `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${elements.split("/")[6]}.png`))
              
              const combineNamesAndUrls = (names: string[], urls: string[]): PokemonData[] => {
                const combined: PokemonData[] = names.map((name, index) => ({
                  name,
                  url: urls[index],
                }));
              
                return combined;
              }
              
              const combinedArray:any = combineNamesAndUrls(namePokemons, idPokemons);              
              setAllDataPokemon(combinedArray);
        }
        
    }

    const pokemonTypes = 
    [{name:"FIRE", color:"#EE8130"}, 
    {name:"NORMAL", color:"#A8A77A",},
    {name:"FIGHTING", color:"#C22E28",},
    {name:"FLIYING", color:"#A98FF3",},
    {name:"POISON", color:"#A33EA1",},
    {name:"GROUND", color:"#E2BF65",},
    {name:"ROCK", color:"#B6A136",},
    {name:"BUG", color:"#A6B91A",},
    {name:"GHOST", color:"#735797",},
    {name:"STEEL", color:"#B7B7CE",},
    {name:"WATER", color:"#6390F0",},
    {name:"GRASS", color:"#7AC74C",},
    {name:"ELECTRIC", color:"#F7D02C",},
    {name:"PSYCHIC", color:"#F95587",},
    {name:"ICE", color:"#96D9D6",},
    {name:"DRAGON", color:"#6F35FC",},
    {name:"DARK", color:"#705746",},
    {name:"FAIRY", color:"#D685AD",},
    {name:"STELLAR", color:"#44628D",},]

     return (
    <div className="">
      <div className="flex justify-center py-5">
        <button className="hover:animate-spin" onClick={fetchPokemonSearch}>
          <Image loading="lazy" draggable="false" height="100" width="100" src="/images/pokeball-button.png" alt="Pokéball"/>
        </button>
      </div>
        <div className="p-[20px] flex flex-wrap w-full m-0 justify-center items-center">
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#EE8130] to-red-200 rounded-xl">
            FIRE
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#A8A77A] to-red-200 rounded-xl">
            NORMAL
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#C22E28] to-red-200 rounded-xl">
            FIGHTING
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#A33EA1] to-red-200 rounded-xl">
            POISON
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#E2BF65] to-red-200 rounded-xl">
            GROUND
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#B6A136] to-red-200 rounded-xl">
            ROCK
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#A6B91A] to-red-200 rounded-xl">
            BUG
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#735797] to-red-200 rounded-xl">
            GHOST
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#B7B7CE] to-red-200 rounded-xl">
            STEEL
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#B7B7CE] to-red-200 rounded-xl">
            WATER
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#7AC74C] to-red-200 rounded-xl">
            GRASS
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#F7D02C] to-red-200 rounded-xl">
            ELECTRIC
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#F95587] to-red-200 rounded-xl">
            PSYCHIC
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#96D9D6] to-red-200 rounded-xl">
            ICE
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#6F35FC] to-red-200 rounded-xl">
            DRAGON
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#705746] to-red-200 rounded-xl">
            DARK
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#D685AD] to-red-200 rounded-xl">
            FAIRY
          </div>
          <div className="w-[60px] h-[20px] text-center m-2 text-xs font-bold text-white bg-gradient-to-r from-[#A98FF3] to-red-200 rounded-xl">
            FLIYING
          </div>
        </div>
        {allDataPokemon.length > 0 && !pokemonError && 
            <div className="box-container p-5 flex flex-wrap w-4/5 mx-auto justify-center items-center rounded-md shadow-2xl">
            {allDataPokemon?.map((elements:any) => (
            <Link href={`pokedex/${elements.name}`} key={elements.name}>
              <div className="w-52 h-52 text-center m-1.5 rounded-full bg-[#F3EEF5] hover:animate-bounce shadow-2xl">
                <Image src={elements.url}
                  width={500}
                  height={500}
                  loading="lazy"
                  alt="Imagen Pokemon"/>
              </div>
              <div className="flex justify-center font-bold">
                {`${elements.name.charAt(0).toUpperCase()}${elements.name.slice(1)}`}
              </div>
            </Link>
            ))}
        </div>
        }
        {
          pokemonError && 
          <div className="flex justify-center flex-col items-center mt-5">
            <h1 className="font-bold text-xl">Tipo Pokémon no encontrado</h1>
            <Image src="/images/not-found.png"
                  width={400}
                  height={400}
                  loading="lazy"
                  alt="Imagen Pokemon"/>
          </div>
        }
    </div>
  )
}

