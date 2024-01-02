import styled from "styled-components";
import { media } from "../../../styles/theme/theme";

export const NoDataFoundWrapper = styled.div`
  .no-data-img {
    max-width: 320px;
    ${media.lg`
        max-width: 260px;
    `}

    ${media.sm`
        max-width: 200px;
    `}
  }
`;
