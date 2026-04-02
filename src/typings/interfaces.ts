export interface GamesResponseDTO {
  count: number
  next: string | null
  previous: string | null
  results: Game[]
  seo_title: string
  seo_description: string
  seo_keywords: string
  seo_h1: string
  noindex: boolean
  nofollow: boolean
  description: string
  filters: Filters
  nofollow_collections: string[]
}

export interface Game {
  id: number
  slug: string
  name: string
  released: string
  tba: boolean
  background_image: string
  rating: number
  rating_top: number
  ratings: Rating[]
  ratings_count: number
  reviews_text_count: number
  added: number
  added_by_status: AddedByStatus
  metacritic: number | null
  playtime: number
  suggestions_count: number
  updated: string
  user_game: unknown | null
  reviews_count: number
  saturated_color: string
  dominant_color: string
  platforms: {
    platform: Platform
    released_at: string
    requirements_en: Requirements | null
    requirements_ru: Requirements | null
  }[]
  parent_platforms: ParentPlatformWrapper[]
  genres: Genre[]
  stores: {
    id: number
    store: Store
  }[]
  clip: unknown | null
  tags: Tag[]
  esrb_rating: EsrbRating | null
  short_screenshots: Screenshot[]
}

export interface Rating {
  id: number
  title: string
  count: number
  percent: number
}

export interface AddedByStatus {
  yet: number
  owned: number
  beaten: number
  toplay: number
  dropped: number
  playing: number
}

export interface Platform {
  id: number
  name: string
  slug: string
  image: string | null
  year_end: number | null
  year_start: number | null
  games_count: number
  image_background: string
}

export interface Requirements {
  minimum?: string
  recommended?: string
}

export interface ParentPlatformWrapper {
  platform: ParentPlatform
}

export interface ParentPlatform {
  id: number
  name: string
  slug: string
}

export interface Genre {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

export interface Store {
  id: number
  name: string
  slug: string
  domain: string
  games_count: number
  image_background: string
}

export interface Tag {
  id: number
  name: string
  slug: string
  language: string
  games_count: number
  image_background: string
}

export interface EsrbRating {
  id: number
  name: string
  slug: string
}

export interface Screenshot {
  id: number
  image: string
}

export interface Filters {
  years: YearFilter[]
}

export interface YearFilter {
  from: number
  to: number
  filter: string
  decade: number
  years: YearCount[]
  nofollow: boolean
  count: number
}

export interface YearCount {
  year: number
  count: number
  nofollow: boolean
}

export interface GameDetailsResponse {
  id: number
  slug: string
  name: string
  name_original: string
  description: string
  metacritic: number | null
  metacritic_platforms: MetacriticPlatform[]
  released: string
  tba: boolean
  updated: string
  background_image: string
  background_image_additional: string
  website: string
  rating: number
  rating_top: number
  ratings: Rating[]
  reactions: Record<string, number>
  added: number
  added_by_status: AddedByStatus
  playtime: number
  screenshots_count: number
  movies_count: number
  creators_count: number
  achievements_count: number
  parent_achievements_count: number
  reddit_url: string
  reddit_name: string
  reddit_description: string
  reddit_logo: string
  reddit_count: number
  twitch_count: number
  youtube_count: number
  reviews_text_count: number
  ratings_count: number
  suggestions_count: number
  alternative_names: string[]
  metacritic_url: string
  parents_count: number
  additions_count: number
  game_series_count: number
  user_game: unknown | null
  reviews_count: number
  saturated_color: string
  dominant_color: string
  parent_platforms: ParentPlatformWrapper[]
  platforms: {
    platform: Platform
    released_at: string
    requirements: Requirements
  }[]
  stores: {
    id: number
    url: string
    store: Store
  }[]
  developers: Company[]
  genres: Genre[]
  tags: Tag[]
  publishers: Company[]
  esrb_rating: EsrbRating | null
  clip: unknown | null
  description_raw: string
}

export interface MetacriticPlatform {
  metascore: number
  url: string
  platform: {
    platform: number
    name: string
    slug: string
  }
}

export interface Rating {
  id: number
  title: string
  count: number
  percent: number
}

export interface AddedByStatus {
  yet: number
  owned: number
  beaten: number
  toplay: number
  dropped: number
  playing: number
}

export interface ParentPlatformWrapper {
  platform: ParentPlatform
}

export interface ParentPlatform {
  id: number
  name: string
  slug: string
}

export interface Platform {
  id: number
  name: string
  slug: string
  image: string | null
  year_end: number | null
  year_start: number | null
  games_count: number
  image_background: string
}

export interface Requirements {
  minimum?: string
  recommended?: string
}

export interface Store {
  id: number
  name: string
  slug: string
  domain: string
  games_count: number
  image_background: string
}

export interface Company {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

export interface Genre {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

export interface Tag {
  id: number
  name: string
  slug: string
  language: string
  games_count: number
  image_background: string
}

export interface EsrbRating {
  id: number
  name: string
  slug: string
}

export interface GameDetailsResponseDto {
  id: number
  slug: string
  name: string
  name_original: string
  description: string
  metacritic: number | null
  metacritic_platforms: {
    metascore: number
    url: string
    platform: {
      platform: number
      name: string
      slug: string
    }
  }[]
  released: string
  tba: boolean
  updated: string
  background_image: string
  background_image_additional: string
  website: string
  rating: number
  rating_top: number
  ratings: {
    id: number
    title: string
    count: number
    percent: number
  }[]
  reactions: Record<string, number>
  added: number
  added_by_status: {
    yet: number
    owned: number
    beaten: number
    toplay: number
    dropped: number
    playing: number
  }
  playtime: number
  screenshots_count: number
  movies_count: number
  creators_count: number
  achievements_count: number
  parent_achievements_count: number
  reddit_url: string
  reddit_name: string
  reddit_description: string
  reddit_logo: string
  reddit_count: number
  twitch_count: number
  youtube_count: number
  reviews_text_count: number
  ratings_count: number
  suggestions_count: number
  alternative_names: string[]
  metacritic_url: string
  parents_count: number
  additions_count: number
  game_series_count: number
  user_game: unknown | null
  reviews_count: number
  saturated_color: string
  dominant_color: string
  parent_platforms: {
    platform: {
      id: number
      name: string
      slug: string
    }
  }[]
  platforms: {
    platform: {
      id: number
      name: string
      slug: string
      image: string | null
      year_end: number | null
      year_start: number | null
      games_count: number
      image_background: string
    }
    released_at: string
    requirements: {
      minimum?: string
      recommended?: string
    }
  }[]
  stores: {
    id: number
    url: string
    store: {
      id: number
      name: string
      slug: string
      domain: string
      games_count: number
      image_background: string
    }
  }[]
  developers: {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
  }[]
  genres: {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
  }[]
  tags: {
    id: number
    name: string
    slug: string
    language: string
    games_count: number
    image_background: string
  }[]
  publishers: {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
  }[]
  esrb_rating: {
    id: number
    name: string
    slug: string
  } | null
  clip: unknown | null
  description_raw: string
}

export interface GenreGame {
  id: number
  slug: string
  name: string
  added: number
}

export interface Genre {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
  games: GenreGame[]
}

export interface GenresResponseDto {
  count: number
  next: string | null
  previous: string | null
  results: Genre[]
}

