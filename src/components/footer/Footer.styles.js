import styled from "styled-components";
import { media } from "../../styles/theme/theme";

export const FooterWrapper = styled.footer`
  padding: 60px 0;
  ${media.xl`
    padding: 40px 0;
  `}

  ${media.lg`
    padding: 30px 0;
  `}

  ${media.sm`
    padding: 20px 0;
  `}

  .footer-top{
    margin-bottom: 60px;

    ${media.lg`
      margin-bottom: 40px;
    `}
  }

  .footer-list{
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;

    ${media.xl`
        grid-template-columns: repeat(3, 1fr);
    `}

    ${media.sm`
        grid-template-columns: repeat(2, 1fr);
    `}

    ${media.xs`
        grid-template-columns: 100%;
        text-align: center;
    `}
  }

  .footer-bottom {
    column-gap: 40px;
    row-gap: 16px;
    padding-top: 24px;
    border-top: 1px solid ${(props) => props.theme.colors.black15};

    ${media.lg`
            flex-direction: column;
        `}

    .bottom-links {

        ${media.sm`
            justify-content: center;
        `}

      .bottom-link {
        padding: 0 20px;
        display: inline-flex;
        justify-content: center;
        border-right: 1px solid ${(props) => props.theme.colors.black15};

        ${media.sm`
            padding: 0 12px;
        `}
      }

      li {
        &:last-child {
          .bottom-link {
            border-right: 0;
            padding-right: 0;
          }
        }

        &:first-child {
          .bottom-link {
            ${media.lg`
                    padding-left: 0;
                `}
          }
        }
      }
    }
  }
`;

export const FooterItemWrapper = styled.div`
  .item-title {
    margin-bottom: 20px;
  }
  .item-text-links {
    display: grid;
    row-gap: 12px;
  }
  .item-icons-links {
    column-gap: 12px;

    ${media.xs`
        justify-content: center;
    `}

    .item-icon-link {
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme.colors.black15};
      width: 48px;
      height: 48px;
      border-radius: 6px;
      img {
        width: 24px;
      }
    }
  }
`;
