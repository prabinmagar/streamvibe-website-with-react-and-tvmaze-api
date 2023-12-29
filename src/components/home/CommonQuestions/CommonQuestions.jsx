import { useState } from "react";
import { Icons } from "../../../assets/icons";
import { FAQS } from "../../../constant/mockData";
import { Container, Paragraph } from "../../../styles/global/default";
import SectionTitle from "../../common/title/SectionTitle";
import PropTypes from "prop-types";
import "./CommonQuestions.styles";
import { CommonQItemWrapper, CommonQWrapper } from "./CommonQuestions.styles";

const CommonQuestions = () => {
  let halfValue = Math.ceil(FAQS.length / 2);
  return (
    <CommonQWrapper className="section-py">
      <SectionTitle
        title={"Frequently Asked Questions"}
        text={
          "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        }
        rightContentType="title-button"
      />
      <Container>
        <div className="common-q-content">
          <div className="common-q-list grid">
            <div className="q-list-one">
              {FAQS?.slice(0, halfValue)?.map((faq, index) => {
                let tempIndex = index + 1;
                return (
                  <CommonQuestionItem
                    data={faq}
                    key={faq.id}
                    count={tempIndex}
                  />
                );
              })}
            </div>
            <div className="q-list-two">
              {FAQS?.slice(halfValue)?.map((faq, index) => {
                let tempIndex = halfValue + (index + 1);
                return (
                  <CommonQuestionItem
                    data={faq}
                    key={faq.id}
                    count={tempIndex}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </CommonQWrapper>
  );
};

export default CommonQuestions;

const CommonQuestionItem = ({ data, count }) => {
  const tempIndex = count < 10 ? `0${count}` : count;
  const [iscollapsed, setIsCollapsed] = useState(true);

  const handleAccordion = () => {
    setIsCollapsed(!iscollapsed);
  };

  return (
    <CommonQItemWrapper className="item">
      <div className="item-grid grid">
        <div className="item-sn bg-black12 text-white flex items-center justify-center text-xl font-semibold">
          {tempIndex}
        </div>
        <div className="item-body">
          <div
            className="item-head flex justify-between items-start"
            onClick={handleAccordion}
          >
            <h4 className="item-title text-xl">{data.question}</h4>
            <button className="item-btn bg-transparent">
              {iscollapsed ? (
                <img src={Icons.Plus} alt="" />
              ) : (
                <img src={Icons.Minus} alt="" />
              )}
            </button>
          </div>
          <div className={`item-text ${!iscollapsed ? "show" : ""}`}>
            <Paragraph>{data.answer}</Paragraph>
          </div>
        </div>
      </div>
    </CommonQItemWrapper>
  );
};

CommonQuestionItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  count: PropTypes.number.isRequired,
};
