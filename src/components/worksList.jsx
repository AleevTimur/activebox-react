import React from "react";
import WorkItem from "./workItem";

const worksData = [
  {
    id: 1,
    title: "Project Name",
    text: "User Interface Design",
    imageUrl: "img/works/work-1.jpg",
  },
  {
    id: 2,
    title: "Project Name",
    text: "User Interface Design",
    imageUrl: "img/works/work-2.jpg",
  },
  {
    id: 3,
    title: "Project Name",
    text: "User Interface Design",
    imageUrl: "img/works/work-3.jpg",
  },
  {
    id: 4,
    title: "Project Name",
    text: "User Interface Design",
    imageUrl: "img/works/work-4.jpg",
  },
  {
    id: 5,
    title: "Project Name",
    text: "User Interface Design",
    imageUrl: "img/works/work-5.jpg",
  },
  {
    id: 6,
    title: "Project Name",
    text: "User Interface Design",
    imageUrl: "img/works/work-6.jpg",
  },
  {
    id: 7,
    title: "Project Name",
    text: "User Interface Design",
    imageUrl: "img/works/work-7.jpg",
  },
  {
    id: 8,
    title: "Project Name",
    text: "User Interface Design",
    imageUrl: "img/works/work-8.jpg",
  },
];

const WorksList = () => {
  return (
    <div className="works" id="works">
      {worksData &&
        worksData.map((work) => (
          <WorkItem
            title={work.title}
            text={work.text}
            imageUrl={work.imageUrl}
            key={work.id}
          />
        ))}
    </div>
  );
};

export default WorksList;
