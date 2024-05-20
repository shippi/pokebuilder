export interface PokemonData {
    name: string,
    url: string
}

export interface PokemonStat {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
}