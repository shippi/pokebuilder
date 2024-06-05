export interface Link {
  name: string
  url: string
}

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

export interface EffortValue {
  name: string,
  amount: number
}

export interface PokemonType {
  slot: number,
  type: {
    name: string,
    url: string
  }
}

export interface PokemonMove {
  name: string,
  type: string,
  damageClass: string
}

export interface EvolutionRequirement {
  gender: string | number
  held_item: string | number
  item: string | number
  known_move: string | number
  known_move_type: string | number
  min_affection: string | number
  min_beauty: string | number
  min_happiness: string | number
  min_level: string | number
  needs_overworld_rain: boolean
  party_species: string | number
  party_type: string | number
  relative_physical_stats: string | number
  time_of_day: string
  trade_species: string | number
  turn_upside_down: boolean
}

export interface EvolutionStage {
  id: string
  requirements?: EvolutionRequirement[]
  species: string
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
    short_effect: string
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