import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import LessonModal from "../../../../modals/LessonModal";
import VideoViewer from "./VideoViewer";
import DocViewer from "./DocViewer";

const LessonCard = ({ lesson }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [showLesson, setShowLesson] = useState(false);

  useEffect(() => {
    const disableLink = !lesson.completed && lesson.status === "inComplete";
    setIsDisabled(disableLink);
  }, [lesson.completed, lesson.status]);

  const handleCloseModal = () => {
    setShowLesson(false);
  };

  const handleOpenModal = () => {
    setShowLesson(true);
  };
  return (
    <>
      <section className="mt-4 w-full border border-[#E5E7EB] shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0px_rgba(0,0,0,0.1)] p-5 md:p-[26px] rounded-[14px] ">
        <div
          className={`w-full ${lesson.completed || lesson.status !== "inComplete" ? "opacity-100 grayscale-0" : "opacity-60 grayscale"}`}
        >
          {(lesson.completed || lesson.status === "completed") && (
            <div className="w-full flex justify-end md:hidden">
              <span className="bg-[#E5E7EB] inline-flex w-auto rounded-full items-center justify-center py-[5px] px-2.5 text-customGrey font-semibold text-xs font-inter">
                Watched
              </span>
            </div>
          )}

          <div
            className={`w-full flex md:mt-0 mt-3 flex-col-reverse md:flex-row md:items-center  gap-5 `}
          >
            <p className="text-[#6A7282] text-md  md:hidden">
              ⏱️{lesson.duration}
            </p>
            <figure className="relative w-full md:max-w-[173px] h-[150px] md:h-[114px] overflow-hidden rounded-[10px]">
              <img
                src={lesson.poster}
                alt="poster"
                className="w-full h-full object-cover"
              />

              <button
                className="absolute w-9 h-9 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center bg-primaryPink"
                disabled={isDisabled}
                onClick={handleOpenModal}
              >
                <FaPlay className="text-white text-[15px]" />
              </button>
            </figure>

            <div className="w-full flex justify-between">
              <article className="w-auto">
                <h4
                  className={`font-figtree text-lg md:text-xl font-bold ${lesson.completed || lesson.status !== "locked" ? "text-darkBlue" : "text-customGrey"}`}
                >
                  {lesson.type === "video" ? `Video` : `Reading`}:{" "}
                  {lesson.title}
                </h4>

                <p className="text-[#6A7282] text-md mt-3 md:block hidden">
                  ⏱️{lesson.duration}
                </p>
              </article>
            </div>
            {(lesson.completed || lesson.status === "completed") && (
              <div className="w-auto md:flex justify-end hidden">
                <span className="bg-[#E5E7EB] inline-flex w-auto rounded-full items-center justify-center py-[5px] px-2.5 text-customGrey font-semibold text-xs font-inter">
                  Watched
                </span>
              </div>
            )}
          </div>

          {/* practice task */}

          <article
            className={`w-full mt-4 rounded-[10px] bg-[#FDF2F8] py-4 px-[15px]`}
          >
            <h4 className="text-sm font-semibold font-inter text-darkBlue">
              📝 Practice Task:
            </h4>

            <p className="font-inter text-[#364153] text-sm mt-2">
              Create a Scratch account and explore the different block
              categories.
            </p>
          </article>

          <div className="mt-4 w-full">
            <p className="font-inter text-sm text-darkBlue flex items-center gap-2 font-semibold">
              <MdOutlineFileDownload />
              Resources:
            </p>

            <ul className="mt-1 flex w-full gap-5 items-center">
              {lesson.resources.map((resource, i) => (
                <li className="w-auto " key={i}>
                  <a
                    href="/#"
                    download={resource.title}
                    className={`py-2.5 px-5 rounded-[100px] overflow-hidden border border-[#E9E1E6] flex items-center justify-center font-inter text-sm ${isDisabled && "cursor-not-allowed"}`}
                    onClick={(e) => {
                      if (isDisabled) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {showLesson && (
        <LessonModal onClose={handleCloseModal}>
          <div className="w-full">
            <div className="w-full flex justify-end items-center">
              <button
                className="text-primaryPink text-2xl"
                onClick={handleCloseModal}
              >
                <IoMdClose />
              </button>
            </div>
            {lesson.type === "video" && <VideoViewer />}
            {lesson.type !== "video" && <DocViewer />}
          </div>
        </LessonModal>
      )}
    </>
  );
};

export default LessonCard;
