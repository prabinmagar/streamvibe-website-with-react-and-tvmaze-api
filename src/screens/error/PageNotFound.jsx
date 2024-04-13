import { Images } from "../../assets/images";
import { HeadingTitleMd } from "../../styles/global/default";
import { PageNotFoundWrap } from "./PageNotFound.styles";

const PageNotFound = () => {
  return (
    <PageNotFoundWrap className="flex items-center justify-center flex-col">
      <div className="page-not-found-img">
        <img src={Images.Error404} alt="" />
      </div>
      <HeadingTitleMd>Page Not Found !</HeadingTitleMd>
    </PageNotFoundWrap>
  );
};

export default PageNotFound;
