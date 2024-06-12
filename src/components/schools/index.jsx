import Slider from "react-slick/lib/slider";
import { InfoCardHeader } from "../shared-components";
import {
  InfoCustomNextArrows,
  InfoCustomPrevArrows,
} from "../shared-components/activities/custom-arrows";
import SchoolCard from "../cards/schools";
import { useQuery } from "@tanstack/react-query";
import { getAllSchools } from "../../services/queries";
import ApiLoading from "../loaders/ApiLoading";
import { EmptyResponse } from "..";

const Schools = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <InfoCustomNextArrows />,
    prevArrow: <InfoCustomPrevArrows />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { isLoading, data } = useQuery({
    queryKey: ["schools"],
    queryFn: getAllSchools,
  });

  return (
    <section className="mx-auto container px-4 my-10 md:my-20">
      <InfoCardHeader
        infoCardHeading="Schools We Have Visited"
        infoCardParagraph="Since the inception of the STEM Club initiative, we have had the privilege of visiting several schools."
      />
      <div className="w-full mt-10 md:mt-14 ">
        {isLoading ? (
          <ApiLoading />
        ) : data.length > 0 ? (
          <Slider {...settings}>
            {data.map((school, index) => (
              <SchoolCard key={index} image={school.image} name={school.name} />
            ))}
          </Slider>
        ) : (
          <EmptyResponse text="school" />
        )}
      </div>
    </section>
  );
};

export default Schools;
