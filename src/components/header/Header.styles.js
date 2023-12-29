import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../styles/theme/theme";

export const HeaderWrapper = styled.header`
  height: 120px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  ${media.lg`
    height: 100px;
  `}

  ${media.sm`
    height: 80px;
  `}

  &.sm-header {
    height: auto !important;
    padding-top: 12px;
    padding-bottom: 12px;
    box-shadow: ${(props) => props.theme.shadows.medium};
    border-bottom: 2px solid ${(props) => props.theme.colors.black10};

    .nav-list {
      padding: 0;
      height: auto;
    }
    .nav-link {
      &.active {
        border-radius: 0;
      }
    }
  }
`;

export const BrandWrapper = styled(Link)`
  width: 200px;
  min-width: 200px;

  ${media.sm`
    width: 160px;
    min-width: 160px;
  `}
`;

export const NavWrapper = styled.nav`
  .nav-list {
    height: 75px;
    border-radius: 12px;
    padding: 10px;
    border: 4px solid #1f1f1f;
  }
  .nav-link {
    height: 55px;
    min-width: 100px;
    padding: 14px;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.gray75};
    font-weight: 600;

    &.active {
      background-color: ${(props) => props.theme.colors.black10};
      color: ${(props) => props.theme.colors.white};
    }

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  ${media.lg`
    display: none!important;
  `}
`;

export const HeaderIconsWrapper = styled.div`
  column-gap: 16px;
  .icon-link {
    min-width: 30px;
    width: 30px;
    height: 30px;
    padding: 4px;

    ${media.lg`
      width: 26px;
      height: 26px;
      min-width: 26px;
    `}

    img {
      width: 100%;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;
