import {
  InfoCustomNextArrows,
  InfoCustomPrevArrows,
} from "../components/shared-components/activities/custom-arrows";

export const infoComponentSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  arrows: true,
  swipeToSlide: true,
  centerPadding: "60px",
  slidesToShow: 3,
  rows: 2,
  slidesPerRow: 1,
  nextArrow: <InfoCustomNextArrows />,
  prevArrow: <InfoCustomPrevArrows />,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        rows: 1,
        slidesPerScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        rows: 1,
        slidesPerScroll: 1,
      },
    },
  ],
};
export const infoComponentsettings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  swipeToSlide: true,
  centerPadding: "60px",
  slidesToShow: 3,
  rows: 2,
  slidesPerRow: 1,
  nextArrow: <InfoCustomNextArrows />,
  prevArrow: <InfoCustomPrevArrows />,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        rows: 1,
        slidesPerScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        rows: 1,
        slidesPerScroll: 1,
      },
    },
  ],
};

export const upcomingEventSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  swipeToSlide: true,
  slidesToShow: 3,
  nextArrow: <InfoCustomNextArrows />,
  prevArrow: <InfoCustomPrevArrows />,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        slidesPerScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesPerScroll: 1,
      },
    },
  ],
};
