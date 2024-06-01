
import Search from "../components/search"
import Table from "../components/table"
import Image from "next/image"

export default async function page({
    searchParams
}:{
    searchParams?:{
        query?: string
    }
}) {

    const query = searchParams?.query || ''

  return (
    <div className="">
        <div className="flex items-center justify-center  flex-col bg-red-500 py-10">
            <Image className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl object-cover" loading="lazy" draggable="false" height="108" width="300" sizes="(min-width: 50px) 100vw," src="/images/pokedexlogo.png" alt="PokéLogo"/>
            <Search placeholder="Buscar por tipo..."/>
        </div>
        <div className="">
            <Table searchPokemon={query}/>
        </div>
    </div>
  )
}
