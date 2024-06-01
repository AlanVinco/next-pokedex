export const fetchApiw = async () :Promise<any> => {
    const response = await fetch("https://pokeapi.co/api/v2/type/fire");
    const pokemon = await response.json();
    console.log(pokemon)
    return pokemon.data;
};

export async function fetchApiSearch ({ searchPokemon }: { searchPokemon: string}){
    console.log(searchPokemon)
    const response = await fetch(`https://pokeapi.co/api/v2/type/fire`);
    const pokemon = await response.json();
    console.log(pokemon)
    return pokemon.data;
};