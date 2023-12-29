import { useEffect } from "react";
import {
  Banner,
  CommonQuestions,
  FreeTrial,
  Genre,
  StreamDevices,
  Subscription,
} from "../../components";
import { scrollToTop } from "../../utilities/scrollToTop";

const HomeScreen = () => {
  useEffect(() => scrollToTop(), []);
  return (
    <div className="pg-home">
      <Banner />
      <Genre />
      <StreamDevices />
      <CommonQuestions />
      <Subscription />
      <FreeTrial />
    </div>
  );
};

export default HomeScreen;
