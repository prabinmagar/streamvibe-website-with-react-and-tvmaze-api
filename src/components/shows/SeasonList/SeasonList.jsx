import { useSelector } from "react-redux";
import { HeadingTitleMd } from "../../../styles/global/default";
import { selectShowSeasons } from "../../../redux/selectors/showsSelectors";
import SeasonItem from "../SeasonItem/SeasonItem";
import { SeasonListWrapper } from "./SeasonList.styles";

const SeasonList = () => {
  const seasonsData = useSelector(selectShowSeasons);
  return (
    <SeasonListWrapper className="detail-block">
      <HeadingTitleMd>Seasons and Episodes</HeadingTitleMd>
      {seasonsData?.map((season) => {
        return <SeasonItem key={season.id} seasonData={season} />;
      })}
    </SeasonListWrapper>
  );
};

export default SeasonList;
