import { SUBSCRIPTIONS } from "../../../constant/mockData";
import {
  BaseButtonPrimary,
  BaseLinkSecondary,
} from "../../../styles/components/Button";
import {
  Container,
  HeadingTitleMd,
  Paragraph,
} from "../../../styles/global/default";
import PropTypes from "prop-types";
import SectionTitle from "../../common/title/SectionTitle";
import {
  SubscriptionItemWrapper,
  SubscriptionWrapper,
} from "./Subscription.styles";

const Subscription = () => {
  return (
    <SubscriptionWrapper>
      <SectionTitle
        title={"Choose the plan that's right for you"}
        text={
          "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        }
        rightContentType="title-tabs-buttons"
      />
      <Container>
        <div className="subs-content">
          <div className="subs-list grid">
            {SUBSCRIPTIONS?.map((subscription) => (
              <SubscriptionItem key={subscription.id} data={subscription} />
            ))}
          </div>
        </div>
      </Container>
    </SubscriptionWrapper>
  );
};

export default Subscription;

const SubscriptionItem = ({ data }) => {
  return (
    <SubscriptionItemWrapper className="bg-black10 flex flex-col justify-between">
      <div className="item-top">
        <HeadingTitleMd>{data.plan}</HeadingTitleMd>
        <Paragraph>{data.description}</Paragraph>
      </div>
      <div className="item-bottom">
        <div className="item-price flex items-baseline flex-wrap">
          <p className="item-price-text font-semibold">${data.monthly_price}</p>
          <Paragraph>/month</Paragraph>
        </div>
        <div className="item-btn-group flex items-center flex-wrap">
          <BaseLinkSecondary className="item-btn">
            <span className="btn-text">Start Free Trial</span>
          </BaseLinkSecondary>
          <BaseButtonPrimary className="item-btn">
            <span className="btn-text">Choose Plan</span>
          </BaseButtonPrimary>
        </div>
      </div>
    </SubscriptionItemWrapper>
  );
};

SubscriptionItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    description: PropTypes.string,
    monthly_price: PropTypes.number.isRequired,
    yearly_price: PropTypes.number.isRequired,
  }),
};
