import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "../services/queries";
import { FaCode, FaGamepad, FaRobot } from "react-icons/fa6";

export const useDynamicCourseNav = () => {
  const allowedCourses = ["coding", "robotics", "game development"];
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });

  const getIcon = (title) => {
    if (title.toLowerCase().includes("coding")) return FaCode;
    if (title.toLowerCase().includes("game")) return FaGamepad;
    if (title.toLowerCase().includes("robot")) return FaRobot;
    return FaCode;
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
      })) || [];

  return { courseDropdown , isLoading};
};
