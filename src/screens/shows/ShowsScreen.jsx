import { useDispatch, useSelector } from "react-redux";
import {
  ErrorMessage,
  FreeTrial,
  ShowsBanner,
  ShowsList,
  ShowsSlider,
  Spinner,
} from "../../components";
import { HIGH_RATED_SHOWS, NEW_SHOWS } from "../../constant/showsConstants";
import {
  selectAllShows,
  selectSortedHighRatedShows,
  selectSortedNewShows,
} from "../../redux/selectors/showsSelectors";
import { useEffect } from "react";
import { fetchAllShows } from "../../redux/slices/showsSlice";
import { scrollToTop } from "../../utilities/scrollToTop";

const ShowsScreen = () => {
  const dispatch = useDispatch();
  const allShowsData = useSelector(selectAllShows);
  const isLoading = useSelector((state) => state.shows.isLoading.fetchAllShows);
  const highRatedShowsData = useSelector(selectSortedHighRatedShows);
  const latestPremieredShowsData = useSelector(selectSortedNewShows);
  const isError = useSelector((state) => state.shows.isError.fetchAllShows);
  const error = useSelector((state) => state.shows.error);

  useEffect(() => {
    dispatch(fetchAllShows());
  }, [dispatch]);

  useEffect(() => scrollToTop(), []);

  if (isLoading.fetchAllShows) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="pg-shows">
      {highRatedShowsData?.length > 0 && (
        <ShowsBanner
          showData={highRatedShowsData[Math.floor(Math.random() * 10)]}
        />
      )}
      {highRatedShowsData?.length > 0 && (
        <ShowsSlider
          sliderType={HIGH_RATED_SHOWS}
          sliderTitle={"All Time Popular Shows"}
          showsData={highRatedShowsData}
        />
      )}
      {latestPremieredShowsData?.length > 0 && (
        <ShowsSlider
          sliderType={NEW_SHOWS}
          sliderTitle={"New Shows To Watch"}
          showsData={latestPremieredShowsData}
        />
      )}
      {allShowsData?.length > 0 && <ShowsList showsData={allShowsData} />}
      <FreeTrial />
    </div>
  );
};

export default ShowsScreen;
