// # Global styles (CSS, fonts, etc.)
import { createGlobalStyle } from "styled-components";
import { media } from "../theme/theme";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    html.smooth-scroll {
        scroll-behavior: auto;
    }

    /* body styles */
    body {
        background: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.white};
        font-family: ${(props) => props.theme.typography.fontFamily};
        line-height: ${(props) => props.theme.typography.lineHeight.medium};
    }

    ul {
        list-style: none;
    }

    img{
        width: 100%;
        display: block;
        max-width: 100%;
    }
    
    /* Link styles */
    a {
        color: ${(props) => props.theme.colors.white};
        text-decoration: none;
        transition: ${(props) => props.theme.transitions.allEaseInOut};

        &:hover {
            color: ${(props) => props.theme.colors.white};
            opacity: 0.9;
        }
    }

    /* Typography styles */
    h1, h2, h3, h4, h5, h6 {
        margin-top: ${(props) => props.theme.spacing.md};
        margin-bottom: ${(props) => props.theme.spacing.sm};
        font-weight: ${(props) => props.theme.typography.fontWeight.bold};
        color: ${(props) => props.theme.colors.white};
        line-height: 1.4;
    }
    h1 {
        font-size: ${(props) => props.theme.typography.fontSize.superTitle};
    }

    h2 {
        font-size: ${(props) => props.theme.typography.fontSize.title};
    }

    h3 {
        font-size: ${(props) => props.theme.typography.fontSize.xxlarge};
    }

    p {
        font-size: ${(props) => props.theme.typography.fontSize.large};
        line-height: ${(props) => props.theme.typography.lineHeight.medium};
    }

    /* Button styles */
    button {
        border: none;
        border-radius: ${(props) => props.theme.borders.radius};
        cursor: pointer;
        transition: ${(props) => props.theme.allEaseInOut};
        outline: 0;
    }

    /* ### utility classes ### */
    /* flexbox and grid */
    .flex {
        display: flex;
        &-col {
            flex-direction: column;
        }
        &-wrap {
            flex-wrap: wrap;
        }
    }
    .inline{
        display: inline;
    }
    .inline-block{
        display: inline-block;
    }
    .inline-flex {
        display: inline-flex;
    }
    .block{
        display: block;
    }

    .items {
        &-center {
            align-items: center;
        }
        &-start {
            align-items: flex-start;
        }
        &-end {
            align-items: flex-end;
        }
        &-stretch {
            align-items: stretch;
        }
        &-baseline{
            align-items: baseline;
        }
    }

    .justify {
        &-center {
            justify-content: center;
        }
        &-between {
            justify-content: space-between;
        }
        &-start {
            justify-content: flex-start;
        }
        &-end {
            justify-content: flex-end;
        }
    }

    .grid {
        display: grid;
    }

    .object-fit-cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        object-position: top;
    }
    .no-wrap {
        white-space: nowrap;
    }
    
    // heights and width
    .h-full {
        height: 100%;
    }

    .w-full {
        width: 100%;
    }

    /* margin auto */
    .mx-auto{
        margin-left: auto;
        margin-right: auto;
    }

    // font weights
    .font-extralight {
        font-weight: ${(props) => props.theme.typography.fontWeight.extraLight};
    }
    .font-light {
        font-weight: ${(props) => props.theme.typography.fontWeight.light};
    }
    .font-regular {
        font-weight: ${(props) => props.theme.typography.fontWeight.regular};
    }
    .font-medium {
        font-weight: ${(props) => props.theme.typography.fontWeight.medium};
    }
    .font-semibold {
        font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
    }
    .font-bold {
        font-weight: ${(props) => props.theme.typography.fontWeight.bold};
    }
    
    // text color classes
    .text-primary{
        color: ${(props) => props.theme.colors.primary};
    }
    .text-secondary{
        color: ${(props) => props.theme.colors.secondary};
    }
    .text-white{
        color: ${(props) => props.theme.colors.white};
    }
    .text-black{
        color: ${(props) => props.theme.colors.primary};
    }
    .text-gray60{
        color: ${(props) => props.theme.colors.gray60};
    }

    // text realted classes
    .text-start {
        text-align: left;
    }
    .text-end {
        text-align: right;
    }
    .text-underline {
        text-decoration: underline;
    }
    .text-center {
        text-align: center;
    }

    .uppercase {
        text-transform: uppercase;
    }
    .capitalize {
        text-transform: capitalize;
    }
    .italic {
        font-style: italic;
    }

    // background classes
    .bg-transparent{
        background-color: transparent;
    }
    .bg-primary{
        background-color: ${(props) => props.theme.colors.primary};
    }
    .bg-secondary{
        background-color: ${(props) => props.theme.colors.secondary};
    }
    .bg-white{
        background-color: ${(props) => props.theme.colors.white};
    }
    .bg-black{
        background-color: ${(props) => props.theme.colors.primary};
    }
    .bg-black06{
        background-color: ${(props) => props.theme.colors.black06};
    }
    .bg-black10{
        background-color: ${(props) => props.theme.colors.black10};
    }
    .bg-black12{
        background-color: ${(props) => props.theme.colors.black12};
    }

    // text size classes
    .text-xs{
        font-size: ${(props) =>
          props.theme.typography.fontSize.xsmall}!important;
    }
    .text-sm{
        font-size: ${(props) =>
          props.theme.typography.fontSize.small}!important;
    }
    .text-md{
        font-size: ${(props) =>
          props.theme.typography.fontSize.medium}!important;
    }
    .text-lg{
        font-size: ${(props) =>
          props.theme.typography.fontSize.large}!important;
    }
    .text-xl{
        font-size: ${(props) =>
          props.theme.typography.fontSize.xlarge}!important;
    }

    ${media.lg`
        .text-xs{
            font-size: ${(props) =>
              props.theme.typography.fontSize.xxsmall}!important;
        }
        .text-sm{
            font-size: ${(props) =>
              props.theme.typography.fontSize.xsmall}!important;
        }
        .text-md{
            font-size: ${(props) =>
              props.theme.typography.fontSize.small}!important;
        }
        .text-lg{
            font-size: ${(props) =>
              props.theme.typography.fontSize.medium}!important;
        }
        .text-xl{
            font-size: ${(props) =>
              props.theme.typography.fontSize.large}!important;
        }
    `}

    ${media.lg`
        .text-sm{
            font-size: ${(props) =>
              props.theme.typography.fontSize.xxsmall}!important;
        }
        .text-md{
            font-size: ${(props) =>
              props.theme.typography.fontSize.xsmall}!important;
        }
        .text-lg{
            font-size: ${(props) =>
              props.theme.typography.fontSize.small}!important;
        }
        .text-xl{
            font-size: ${(props) =>
              props.theme.typography.fontSize.medium}!important;
        }
    `}

    .section-py{
        padding: 60px 0;

        ${media.xxl`
            padding: 50px 0;
        `}

        ${media.lg`
            padding: 40px 0;
        `}

        ${media.sm`
            padding: 30px 0;
        `}

        ${media.xs`
            padding: 20px 0;
        `}
    }

    .top-spacing-fix{
        margin-top: 120px;

        ${media.lg`
            margin-top: 100px;
        `}

        ${media.sm`
            margin-top: 80px;
        `}
    }
`;
