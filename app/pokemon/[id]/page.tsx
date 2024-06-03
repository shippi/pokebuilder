import PokedexEntry from "@/components/PokedexEntry/PokedexEntry";

interface Props {
  params: {
    id: string
  }
}

function PokemonInfo({params: {id}}: Props) {
  return <PokedexEntry id={id}/>
}

export default PokemonInfo