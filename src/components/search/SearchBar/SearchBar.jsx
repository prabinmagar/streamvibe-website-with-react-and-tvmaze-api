import { useEffect, useRef, useState } from "react";
import { Icons } from "../../../assets/icons";
import { Images } from "../../../assets/images";
import { SearchBarWrapper } from "./SearchBar.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearchResults,
  resetSearchResults,
} from "../../../redux/slices/showsSlice";
import { selectSearchResults } from "../../../redux/selectors/showsSelectors";
import SearchList from "../SearchList/SearchList";
import NoDataFound from "../../common/NoDataFound/NoDataFound";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [searchError, setSearchError] = useState("");
  const searchResultsData = useSelector(selectSearchResults);
  const inputRef = useRef("");

  const isValidSearchQuery = (query) => {
    const regex = /^[\w\s\-',.?!&]+$/i;
    return regex.test(query);
  };

  const handleQueryChange = (event) => setQuery(event.target.value);

  const handleQuerySubmit = async (event) => {
    event.preventDefault();
    if (isValidSearchQuery(query)) {
      await dispatch(fetchSearchResults(query));
    } else if (query.trim().length === 0) {
      setSearchError("Please enter shows name.");
    } else {
      setSearchError("Please enter valid show title or name.");
    }
  };

  const handleQueryFocus = () => setSearchError("");

  useEffect(() => {
    if (!query.trim()) {
      dispatch(resetSearchResults());
    }
  }, [query, dispatch]);

  const hasValidQuery = isValidSearchQuery(query);

  return (
    <SearchBarWrapper>
      <div className="searchbar-top flex items-center justify-center">
        <img
          src={Images.HomeBanner}
          className="obj-fit-cover searchbar-banner"
          alt=""
        />
        <form onSubmit={handleQuerySubmit}>
          <div className="search-box flex">
            <div className="search-input">
              <input
                type="text"
                placeholder="Search for TV shows ..."
                className="text-lg font-semibold"
                onChange={handleQueryChange}
                ref={inputRef}
                onFocus={handleQueryFocus}
              />
            </div>
            <button type="submit" className="search-icon bg-transparent">
              <img src={Icons.Search} alt="" />
            </button>
            <span className="search-error-text">{searchError}</span>
          </div>
        </form>
      </div>
      <div className="searchbar-bottom">
        {hasValidQuery &&
          (searchResultsData && searchResultsData.length > 0 ? (
            <SearchList searchResultsData={searchResultsData} />
          ) : (
            <NoDataFound />
          ))}
      </div>
    </SearchBarWrapper>
  );
};

export default SearchBar;
