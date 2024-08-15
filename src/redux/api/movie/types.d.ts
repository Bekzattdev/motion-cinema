namespace MOVIE {
  type GetMovieResponse = {
    map(arg0: (item: any, index: any) => React.JSX.Element): unknown;
    title: string;
    title_ru: string;
    title_ky: string;
    title_en: string;
    tagline: string;
    tagline_ru: string;
    tagline_ky: string;
    tagline_en: string;
    description: string;
    description_ru: string;
    description_ky: string;
    description_en: string;
    year: number;
    country: string;
    country_ru: string;
    country_ky: string;
    country_en: string;
    world_premiere: string;
    budget: number;
    fees_in_usa: number;
    fees_in_world: string;
    draft: boolean;
    date: number;
    quality: waggerQuality;
    star: number;
    created: string;
    slug: string;
    category: number;
    actors: number[];
    genres: number[];
    director: number[];
    poster: string;
    id: number;
    video: sting;
  };

  type GetMovieRequest =void
}
