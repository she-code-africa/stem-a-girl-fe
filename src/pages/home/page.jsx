import React from "react";
import { GlobalLayout } from "../../components";
import Header from "../../components/header";
import Stats from "../../components/stats";

const HomePage = () => {
  return (
    <GlobalLayout>
      <Header />
      <Stats />
      <div className="max-w-4xl w-full mx-auto">
        <h3 className="font-semibold text-2xl leading-9 lg:text-[48px] text-center lg:leading-[62.4px]">
          Program Mission
        </h3>
        <p className="text-lg md:text-2xl md:leading-9 text-center tracking-tight">
          Our mission is to create more awareness and inspire girls in secondary
          schools aged 10 - 21 to pursue careers in Science, Technology,
          Engineering, and Mathematics (STEM).
        </p>
      </div>

      <div className="my-20">
        <div>
          <h4>
            <span> Zero tech skills? </span>
            <br />
            don’t worry, we’ve got you.
          </h4>
          <p>
            These track hubs are linked to the She Code Africa STEM Club program
            and have been developed in partnership with club facilitators,
            schools and partner organizations.
          </p>
        </div>
        <div>
          <p>Image 1</p>
          <p>Image 2</p>
          <p>Image 3</p>
        </div>
      </div>
      <div>
        <p>Our Club Activities </p>
        <p>
          Since the inception of the STEM Club initiative, we have had the
          privilege of visiting several schools, where we have:
        </p>
        <div></div>
      </div>
      <div className="flex">
        <div>
          <p>
            Curious about our STEM Initiative? Get informed and empowered with
            our FAQs
          </p>
        </div>
        <div>faq</div>
      </div>
    </GlobalLayout>
  );
};

export default HomePage;
