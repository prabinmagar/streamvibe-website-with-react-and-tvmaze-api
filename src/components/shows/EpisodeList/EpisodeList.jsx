import PropTypes from "prop-types";
import EpisodeItem from "../EpisodeItem/EpisodeItem";
import { EpisodeListWrapper } from "./EpisodeList.styles";

const EpisodeList = ({ episodesData, seasonNo }) => {
  const filteredEpisodes = episodesData?.filter(episode => episode?.season === seasonNo);
  return (
    <EpisodeListWrapper className="grid">
      {filteredEpisodes?.map((episode) => {
        return <EpisodeItem key={episode?.id} seasonNo={seasonNo} episodeData={episode} />;
      })}
    </EpisodeListWrapper>
  );
};

export default EpisodeList;

EpisodeList.propTypes = {
  episodesData: PropTypes.array.isRequired,
  seasonNo: PropTypes.number.isRequired
};
