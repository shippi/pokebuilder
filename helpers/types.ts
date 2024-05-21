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

export interface PokemonType {
  slot: number,
  type: {
    name: string,
    url: string
  }
}

export interface EvolutionRequirement {
  trigger: string
  value: string | number
}

export interface Language {
  name: string,
  url: string
}

export interface Genus {
  genus: string,
  language: Language
}

export interface AbilityEffect {
  effect_entries: {
    effect: string
    language: Language
  }[]
}

export interface Ability {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}