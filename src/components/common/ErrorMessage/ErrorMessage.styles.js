import styled from "styled-components";
import { media } from "../../../styles/theme/theme";

export const ErrorMessageWrapper = styled.div`
  margin-top: 120px;
  padding: 60px 0;

  ${media.lg`
    padding: 30px 0;
    margin-top: 100px;
  `}

  ${media.sm`
    padding: 20px 0;
    margin-top: 80px;
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
