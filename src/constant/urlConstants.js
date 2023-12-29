const baseEndpoint = "https://api.tvmaze.com";

const urlConstants = {
  apiBaseUrl: baseEndpoint,
  fetchShowsUrl: `${baseEndpoint}/shows`,
  seasonsCastEpisodesEmbed: `?embed[]=episodes&embed[]=cast&embed[]=seasons`,
  searchShowsUrl: `${baseEndpoint}/search/shows`,
};

export default urlConstants;
