import { useSelector } from "react-redux";
import { Paragraph } from "../../../styles/global/default";
import { selectShowDescription } from "../../../redux/selectors/showsSelectors";
import SeasonList from "../SeasonList/SeasonList";
import ShowCast from "../ShowCast/ShowCast";
import { ShowMainDataWrapper } from "./ShowMainData.styles";

const ShowMainData = () => {
  const descriptionData = useSelector(selectShowDescription);
  return (
    <ShowMainDataWrapper>
      <SeasonList />
      <div className="detail-block show-description">
        <h4 className="detail-block-title">Description</h4>
        <Paragraph
          className="text-white"
          dangerouslySetInnerHTML={{ __html: descriptionData }}
        ></Paragraph>
      </div>
      <ShowCast />
    </ShowMainDataWrapper>
  );
};

export default ShowMainData;
