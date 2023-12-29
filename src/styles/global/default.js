// Default styles - In the context of Styled Components, the default.js file is typically used to define reusable styled components that can be imported and used across various parts of your application.

import styled, { css } from "styled-components";
import { media } from "../theme/theme";
export const PageWrapper = styled.div`
  overflow: hidden;
`;

// Heading components
export const HeadingBanner = styled.h1`
  font-size: ${(props) => props.theme.typography.fontSize.superTitle};

  ${media.lg`
    font-size: ${(props) => props.theme.typography.fontSize.title}!important;
  `}

  ${media.lg`
    font-size: ${(props) => props.theme.typography.fontSize.xxlarge}!important;
  `}
`;

export const HeadingTitle = styled.h2`
  font-size: ${(props) => props.theme.typography.fontSize.title};

  ${media.lg`
    font-size: ${(props) => props.theme.typography.fontSize.xxlarge}!important;
  `}

  ${media.lg`
    font-size: ${(props) => props.theme.typography.fontSize.xlarge}!important;
  `}
`;

export const HeadingTitleMd = styled.h3`
  font-size: ${(props) => props.theme.typography.fontSize.xxlarge};

  ${media.xxl`
    font-size: ${(props) => props.theme.typography.fontSize.xlarge}!important;
  `}

  ${media.lg`
    font-size: ${(props) => props.theme.typography.fontSize.large}!important;
  `}
`;

const commonTextStyles = css`
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  line-height: ${(props) => props.theme.typography.lineHeight.medium};
  color: ${(props) => props.theme.colors.gray60};
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};

  ${media.sm`
    font-size: 15px!important;
    line-height: 1.6;
  `}

  ${media.sm`
    font-size: ${(props) => props.theme.typography.fontSize.small}!important;
    line-height: 1.5;
  `}
`;

// Paragraph component
export const Paragraph = styled.p`
  ${commonTextStyles}
  p{
    ${commonTextStyles}; // applying to nested p tag also
  }
`;

export const Text = styled.p`
  ${commonTextStyles}
`;

// Container component
export const Container = styled.div`
  max-width: ${(props) => props.theme.breakpoints.xxxl};
  margin: 0 auto;
  padding-left: ${(props) => props.theme.spacing.md};
  padding-right: ${(props) => props.theme.spacing.md};
`;
