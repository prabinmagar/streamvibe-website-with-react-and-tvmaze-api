import axios from "axios";
import urlConstants from "../../constant/urlConstants";

const fetchAllShows = async () => {
  const response = await axios.get(urlConstants.fetchShowsUrl);
  return response.data;
};

const fetchSingleShow = async (showId) => {
  const fetchShowDetailUrl =
    urlConstants.fetchShowsUrl +
    `/${showId}` +
    urlConstants.seasonsCastEpisodesEmbed;
  const response = await axios.get(fetchShowDetailUrl);
  return response.data;
};

const showsService = {
  fetchAllShows,
  fetchSingleShow,
};

export default showsService;
