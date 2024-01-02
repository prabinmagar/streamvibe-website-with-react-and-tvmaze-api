import styled from "styled-components";
import { media } from "../../../styles/theme/theme";

export const ErrorMessageWrapper = styled.div`
  padding: 60px 0;

  ${media.lg`
    padding: 30px 0;
  `}

  ${media.sm`
    padding: 20px 0;
  `}

  .error-content {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  .error-img {
    max-width: 320px;

    ${media.lg`
        max-width: 260px;
    `}

    ${media.sm`
        max-width: 200px;
    `}
  }
  .error-title {
    font-size: 20px !important;

    ${media.sm`
            font-size: 16px!important;
        `}
  }
`;
