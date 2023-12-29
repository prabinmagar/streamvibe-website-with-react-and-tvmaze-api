import PropTypes from "prop-types";
import { ErrorMessageWrapper } from "./ErrorMessage.styles";
import { Container, HeadingTitleMd } from "../../../styles/global/default";
import { Images } from "../../../assets/images";
import errorConstants from "../../../constant/errorConstants";

const ErrorMessage = ({ error }) => {
  const dispalyErrorImage = () => {
    if (error?.code === errorConstants.ERR_404) {
      return (
        <img className="error-img" src={Images.Error404} alt="error 404" />
      );
    } else if (error?.code === errorConstants.ERR_429) {
      return (
        <img className="error-img" src={Images.Error429} alt="error 429" />
      );
    } else {
      return (
        <img className="error-img" src={Images.ErrorNoData} alt="error 429" />
      );
    }
  };

  return (
    <ErrorMessageWrapper className="text-center">
      <Container>
        <div className="error-content flex flex-col justify-between items-center">
          {dispalyErrorImage()}
          <HeadingTitleMd className="error-title">
            {error?.message} !
          </HeadingTitleMd>
        </div>
      </Container>
    </ErrorMessageWrapper>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  error: PropTypes.object,
};
