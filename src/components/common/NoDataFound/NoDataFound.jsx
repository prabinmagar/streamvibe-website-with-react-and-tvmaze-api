import { Images } from "../../../assets/images";
import { Container, HeadingTitleMd } from "../../../styles/global/default";
import { NoDataFoundWrapper } from "./NoDataFound.styles";

const NoDataFound = () => {
  return (
    <NoDataFoundWrapper className="text-center top-spacing-fix">
      <Container>
        <div className="error-content flex flex-col justify-between items-center">
          <img src={Images.NoData} className="no-data-img" />
          <HeadingTitleMd className="error-title">
            No Data Found !
          </HeadingTitleMd>
        </div>
      </Container>
    </NoDataFoundWrapper>
  );
};

export default NoDataFound;
