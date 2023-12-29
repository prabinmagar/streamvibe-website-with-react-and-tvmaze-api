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

const Header = () => {
  const scrollThreshold = 0;
  const hasBackground = useHeaderBackground(scrollThreshold);
  const headerStyle = hasBackground ? "bg-black06 sm-header" : "bg-transparent";
  const location = useLocation();

  return (
    <HeaderWrapper className={`flex items-center ${headerStyle}`}>
      <Container className="w-full">
        <div className="header-content flex items-center justify-between">
          <BrandWrapper to={routeConstants.HOME}>
            <img src={Images.Logo} alt="site brand logo" />
          </BrandWrapper>
          <NavWrapper className="flex items-center justify-center">
            <ul className="nav-list flex items-center justify-center bg-black06">
              <li className="nav-item">
                <Link
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
          </HeaderIconsWrapper>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
