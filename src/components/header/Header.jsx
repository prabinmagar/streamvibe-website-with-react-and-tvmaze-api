import { Container } from "../../styles/global/default";
import { Images } from "../../assets/images";
import { Icons } from "../../assets/icons";
import { Link, useLocation } from "react-router-dom";
import useHeaderBackground from "../../hooks/hasHeaderBackground";
import routeConstants from "../../constant/routeConstants";
import {
  BrandWrapper,
  HeaderIconsWrapper,
  HeaderWrapper,
  NavWrapper,
} from "./Header.styles";
import {
  closeSidebar,
  openSidebar,
  selectIsSidebarOpen,
} from "../../redux/slices/sidebarSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

const Header = () => {
  const scrollThreshold = 0;
  const hasBackground = useHeaderBackground(scrollThreshold);
  const headerStyle = hasBackground ? "bg-black06 sm-header" : "bg-transparent";
  const location = useLocation();
  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  const dispatch = useDispatch();
  const navRef = useRef(null);

  const handleNavClose = (event) => {
    if (
      navRef?.current &&
      !navRef.current.contains(event.target) &&
      !isDescendantOf(event.target, "sidebar-open-btn")
    ) {
      dispatch(closeSidebar());
    }
  };

  const isDescendantOf = (element, className) => {
    let currentElement = element;
    while (
      currentElement !== null &&
      !currentElement?.classList?.contains(className)
    ) {
      currentElement = currentElement.parentNode;
    }
    return currentElement?.classList?.contains(className) ?? false;
  };

  useEffect(() => {
    document.body.addEventListener("click", handleNavClose);
    return () => {
      document.body.removeEventListener("click", handleNavClose);
    };
  }, []);

  const handleNavLinkClick = () => {
    dispatch(closeSidebar());
  };

  return (
    <HeaderWrapper className={`flex items-center ${headerStyle}`}>
      <Container className="w-full">
        <div className="header-content flex items-center justify-between">
          <BrandWrapper to={routeConstants.HOME}>
            <img src={Images.Logo} alt="site brand logo" />
          </BrandWrapper>
          <NavWrapper
            className={`flex items-center justify-center ${
              isSidebarOpen ? "show" : ""
            }`}
            ref={navRef}
          >
            <button
              type="button"
              className="sidebar-close-btn"
              onClick={() => dispatch(closeSidebar())}
            >
              <img src={Icons.Close} alt="" />
            </button>
            <ul className="nav-list flex items-center justify-center bg-black06">
              <li className="nav-item">
                <Link
                  onClick={handleNavLinkClick}
                  to={routeConstants.HOME}
                  className={`nav-link inline-flex items-center justify-center text-center ${
                    location.pathname === routeConstants.HOME ? "active" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={handleNavLinkClick}
                  to={routeConstants.SHOWS}
                  className={`nav-link inline-flex items-center justify-center text-center ${
                    location.pathname === routeConstants.SHOWS ||
                    location.pathname.startsWith(routeConstants.SHOWS)
                      ? "active"
                      : ""
                  }`}
                >
                  Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={handleNavLinkClick}
                  to="/support"
                  className="nav-link inline-flex items-center justify-center text-center"
                >
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/subscription"
                  className="nav-link inline-flex items-center justify-center text-center"
                >
                  Subscription
                </Link>
              </li>
            </ul>
          </NavWrapper>
          <HeaderIconsWrapper className="flex items-center">
            <Link
              to="/search"
              className="icon-link flex items-center justify-center"
            >
              <img src={Icons.Search} alt="" />
            </Link>
            <Link
              to="/search"
              className="icon-link flex items-center justify-center"
            >
              <img src={Icons.Bell} alt="" />
            </Link>
            <button
              type="button"
              to="/search"
              className="icon-link flex items-center justify-center sidebar-open-btn"
              onClick={() => dispatch(openSidebar())}
            >
              <img src={Icons.Menu} alt="" />
            </button>
          </HeaderIconsWrapper>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
