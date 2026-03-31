import React from "react";
import { CodingPageComponent, GlobalLayout } from "../../components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getACourse } from "../../services/queries";

const CoursePage = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ["courses", id],
    queryFn: () => getACourse(id),
  });

  return (
    <div>
      <GlobalLayout>
        <CodingPageComponent
          isLoadingCourse={isLoading}
          isError={isError}
          courseData={data}
        />
      </GlobalLayout>
    </div>
  );
};

export default CoursePage;
