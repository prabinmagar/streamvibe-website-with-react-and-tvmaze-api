import PropTypes from "prop-types";
import { HeadingTitleMd, Text } from "../../../styles/global/default";
import { Icons } from "../../../assets/icons";
import { useSelector } from "react-redux";
import { selectShowEpisodes } from "../../../redux/selectors/showsSelectors";
import EpisodeList from "../EpisodeList/EpisodeList";
import { useEffect, useState } from "react";
import { SeasonItemWrapper } from "./SeasonItem.styles";

const SeasonItem = ({ seasonData }) => {
  const episodesData = useSelector(selectShowEpisodes);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    if (seasonData?.number === 1) setIsCollapsed(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SeasonItemWrapper className="bg-black06">
      <div className="season-head flex items-center justify-between">
        <div className="season-head-title flex items-center flex-wrap">
          <HeadingTitleMd>Season {seasonData?.number}</HeadingTitleMd>
          <Text>{seasonData?.episodeOrder} Episodes</Text>
        </div>
        <button
          className="season-head-btn inline-flex items-center justify-center"
          onClick={handleAccordion}
        >
          <img src={Icons.ArrowDownGrey} alt="" />
        </button>
      </div>
      <div className={`season-body ${!isCollapsed ? "show" : ""}`}>
        {episodesData && (
          <EpisodeList
            seasonNo={seasonData?.number}
            episodesData={episodesData}
          />
        )}
      </div>
    </SeasonItemWrapper>
  );
};

export default SeasonItem;

SeasonItem.propTypes = {
  seasonData: PropTypes.object.isRequired,
};
