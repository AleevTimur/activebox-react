import React from "react";
import { TeamItem } from "../TeamItem";

const teamData = [
  {
    id: 1,
    name: "Puth Woods",
    profession: ["Founder, CEO"],
    photo: "img/team/team-1.jpg",
    description:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",

    links: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 2,
    name: "Timothy Reed",
    profession: ["Co-Founder, Developer"],
    photo: "img/team/team-2.jpg",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for",
    links: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: null,
    },
  },
  {
    id: 3,
    name: "Victoria Valdez",
    profession: "UI Designer",
    photo: "img/team/team-3.jpg",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    links: {
      twitter: null,
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 4,
    name: "Beverly Little",
    profession: "Data Scientist",
    photo: "img/team/team-4.jpg",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    links: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
];

export const TeamList = () => {
  return (
    <div className="team" id="team">
      <div className="container">
        <div className="team__inner">
          {teamData &&
            teamData.map((teamItem) => (
              <TeamItem
                name={teamItem.name}
                profession={teamItem.profession}
                photo={teamItem.photo}
                description={teamItem.description}
                links={teamItem.links}
                key={teamItem.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
