import SectionTitle from "../../title/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GENRES } from "../../../../constant/mockData";
import { Container } from "../../../../styles/global/default";
import { GenreWrapper } from "./Genre.styles";
import { SliderWrapper } from "../../slider/Slider.styles";
import CustomNextArrow from "../../slider/CustomNextArrow";
import CustomPrevArrow from "../../slider/CustomPrevArrow";
import GenreItem from "../GenreItem/GenreItem";

const Genre = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <GenreWrapper className="section-py">
      <SectionTitle
        title={"Explore our wide variety of categories"}
        text={
          "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        }
      />
      <Container>
        <SliderWrapper>
          <Slider
            {...settings}
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
          >
            {GENRES?.map((genre) => (
              <GenreItem data={genre} key={genre.id} />
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </GenreWrapper>
  );
};

export default Genre;
