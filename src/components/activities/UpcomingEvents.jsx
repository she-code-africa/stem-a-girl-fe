import React, { useState, useEffect } from "react";
import { InfoCardHeader, EventsSlider } from "../shared-components";
// import { upcomingEventsSlider } from "../../utils/appData";
import { upcomingEventSettings } from "../../utils/sliderSettings";
import { useQuery } from "@tanstack/react-query";
import { getActivityEvents, getAllActivities } from "../../services/queries";
import { ApiLoading, EmptyResponse } from "..";

const UpcomingEvents = ({ activityTitle }) => {
  const { isLoading, data: allActivities } = useQuery({
    queryKey: ["activities"],
    queryFn: getAllActivities,
  });
  const [activityId, setActivityId] = useState("");

  useEffect(() => {
    const activityExists =
      !isLoading &&
      allActivities.find(
        (activity) => activity.title.toLowerCase() === activityTitle
      );

    if (activityExists) {
      setActivityId(activityExists._id);
    }
  }, [isLoading, activityTitle, allActivities]);

  const { isLoading: isEventLoading, data: activityData } = useQuery({
    queryKey: ["activityEvent", activityId],
    queryFn: () => getActivityEvents(activityId),
    enabled: !!activityId && !isLoading,
  });
  return (
    <>
      <InfoCardHeader
        infoCardHeading="upcoming events"
        infoCardParagraph="Stay tuned for our upcoming events and workshops:"
      />

      {isEventLoading ? (
        <ApiLoading />
      ) : !!activityData && activityData.length > 0 ? (
        <EventsSlider
          settings={upcomingEventSettings}
          sliderData={activityData}
          imageH="h-[403px]"
        />
      ) : (
        <>
          <EmptyResponse text="event" />
        </>
      )}
    </>
  );
};

export default UpcomingEvents;
