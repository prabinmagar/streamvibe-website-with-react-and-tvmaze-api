import ShowsList from "../../common/shows/ShowsList/ShowsList";
import { SearchListWrapper } from "./SearchList.styles";
import PropTypes from "prop-types";

const SearchList = ({ searchResultsData }) => {
  const showsData = searchResultsData.map((singleResult) => singleResult.show);
  return (
    <SearchListWrapper>
      <ShowsList showsData={showsData} showsTitle={"Search Results"} />
    </SearchListWrapper>
  );
};

export default SearchList;

SearchList.propTypes = {
  searchResultsData: PropTypes.array.isRequired,
};
