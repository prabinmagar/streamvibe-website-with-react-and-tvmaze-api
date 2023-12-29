import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectShowDetail,
  selectShowMetadata,
} from "../../redux/selectors/showsSelectors";
import { useEffect } from "react";
import { fetchSingleShow } from "../../redux/slices/showsSlice";
import { scrollToTop } from "../../utilities/scrollToTop";
import {
  ErrorMessage,
  FreeTrial,
  ShowMainData,
  ShowMetaData,
  ShowsBanner,
  Spinner,
} from "../../components";
import { Container } from "../../styles/global/default";
import { ShowDetailContent } from "./ShowDetailScreen.styles";

const ShowDetailScreen = () => {
  const { id: showId } = useParams();
  const dispatch = useDispatch();
  const showDetailData = useSelector(selectShowDetail);
  const isLoading = useSelector(
    (state) => state.shows.isLoading.fetchSingleShow
  );
  const isError = useSelector((state) => state.shows.isError.fetchSingleShow);
  const error = useSelector((state) => state.shows.error);
  const showMetaData = useSelector(selectShowMetadata);

  console.log(isLoading)

  useEffect(() => {
    dispatch(fetchSingleShow(showId));
  }, [dispatch, showId]);

  useEffect(() => scrollToTop(), []);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="pg-show-detail">
      {showDetailData && <ShowsBanner showData={showDetailData} />}
      <Container>
        {showDetailData && (
          <ShowDetailContent>
            <ShowMainData />
            <ShowMetaData metaData={showMetaData} />
          </ShowDetailContent>
        )}
      </Container>
      <FreeTrial />
    </div>
  );
};

export default ShowDetailScreen;

// By separating the concerns into two separate useEffect hooks, you ensure that the show detail fetches only once when showId changes, and the states (showCast, showEpisodes, showSeasons) update correctly when showDetailData changes, avoiding the infinite loop issue.
