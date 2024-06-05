import React from "react";
import { InfoCardHeader, InfoCardSlider } from "../shared-components";
import { upcomingEventsSlider } from "../../utils/appData";
import { upcomingEventSettings } from "../../utils/sliderSettings";

const UpcomingEvents = () => {
  return (
    <>
      <InfoCardHeader
        infoCardHeading="upcoming events"
        infoCardParagraph="Stay tuned for our upcoming events and workshops:"
      />

      <InfoCardSlider
        settings={upcomingEventSettings}
        sliderData={upcomingEventsSlider}
        imageH="h-[403px]"
      />
    </>
  );
};

export default UpcomingEvents;
