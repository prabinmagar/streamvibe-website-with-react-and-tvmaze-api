import { HeadingTitle, Paragraph } from "../../../styles/global/default";
import { Container } from "../../../styles/global/default";
import PropTypes from "prop-types";
import { BaseLinkPrimary } from "../../../styles/components/Button";
import { SectionTitleWrapper } from "./SectionTitle.styles";

const SectionTitle = ({ title, text, rightContentType }) => {
  return (
    <SectionTitleWrapper>
      <Container>
        <div className="title-grid flex items-center justify-between flex-wrap">
          <div className="title-left">
            <HeadingTitle>{title}</HeadingTitle>
            <Paragraph>{text}</Paragraph>
          </div>
          <div className="title-right">
            {rightContentType === "title-button" && (
              <BaseLinkPrimary>
                <div className="btn-text">Ask a Question</div>
              </BaseLinkPrimary>
            )}
          </div>
        </div>
      </Container>
    </SectionTitleWrapper>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  rightContentType: PropTypes.string,
};
