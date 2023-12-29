import { HIGH_RATED_SHOWS, NEW_SHOWS } from "../../constant/showsConstants";
import { createSelector } from "reselect";

export const selectAllShows = (state) => state?.shows?.shows || [];

// Memoize sorting functions
const sortShowsByType = (type) => {
  return createSelector([selectAllShows], (shows) => {
    if (type === HIGH_RATED_SHOWS) {
      return [...shows].sort((a, b) => b.rating.average - a.rating.average);
    } else if (type === NEW_SHOWS) {
      return [...shows].sort(
        (a, b) => new Date(b.premiered) - new Date(a.premiered)
      );
    }
    return shows;
  });
};

// Use the memoized sorting functions directly where needed
export const selectSortedHighRatedShows = sortShowsByType(HIGH_RATED_SHOWS);
export const selectSortedNewShows = sortShowsByType(NEW_SHOWS);

// single shows
export const selectShowDetail = (state) => state.shows.singleShow;

// Memoized Selectors
export const selectShowCast = createSelector(
  [selectShowDetail],
  (showDetail) => showDetail?._embedded?.cast
);

export const selectShowEpisodes = createSelector(
  [selectShowDetail],
  (showDetail) => showDetail?._embedded?.episodes
);

export const selectShowSeasons = createSelector(
  [selectShowDetail],
  (showDetail) => showDetail?._embedded?.seasons
);

export const selectShowMetadata = createSelector(
  [selectShowDetail],
  (showDetail) => {
    if (!showDetail) return null;
    return {
      name: showDetail.name,
      officialSite: showDetail.officialSite,
      premiered: showDetail.premiered,
      ended: showDetail.ended,
      genres: showDetail.genres,
      image: showDetail.image,
      rating: showDetail.rating,
      status: showDetail.status,
      runtime: showDetail.runtime,
      language: showDetail.language,
      url: showDetail.url,
    };
  }
);

export const selectShowDescription = createSelector(
  [selectShowDetail],
  (showDetail) => showDetail?.summary
);
