import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "../services/queries";

import NavCodeTagIcon from "../components/shared-components/icons/NavCodeTagIcon";
import NavGameControlIcon from "../components/shared-components/icons/NavGameControlIcon";
import NavRobotIcon from "../components/shared-components/icons/NavRobotIcon";

export const useDynamicCourseNav = () => {
  const allowedCourses = ["coding", "robotics", "game development"];
  const order = ["coding", "game", "robot"];

  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });

  const getIcon = (title) => {
    if (title.toLowerCase().includes("coding")) return NavCodeTagIcon;
    if (title.toLowerCase().includes("game")) return NavGameControlIcon;
    if (title.toLowerCase().includes("robot")) return NavRobotIcon;
    return NavCodeTagIcon;
  };

  const courseDropdown =
    courses
      ?.filter((course) =>
        allowedCourses.some((name) =>
          course.title.toLowerCase().includes(name),
        ),
      )
      .map((course) => ({
        title: course.title,
        url: `/course/${course._id}`,
        icon: getIcon(course.title),
      }))
      .sort((a, b) => {
        const aIndex = order.findIndex((keyword) =>
          a.title.toLowerCase().includes(keyword),
        );
        const bIndex = order.findIndex((keyword) =>
          b.title.toLowerCase().includes(keyword),
        );
        return aIndex - bIndex;
      }) || [];

  const coursesLinks = courseDropdown.map((course) => ({
    url: course.url,
    title: course.title,
  }));

  return { courseDropdown, isLoading, coursesLinks };
};
