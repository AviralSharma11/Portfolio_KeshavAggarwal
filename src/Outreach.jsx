import React from "react";
import { Link} from "react-router-dom";
import "./Outreach.css"; 
import Header from "./Components/Header";

export default function Outreach() {


  const sections = [
    {
      title: "Blog",
      image: "/Images/blog.jpeg", 
      route: "https://jovian-explorer.medium.com/",
    },

    {
      title: "Food & Travel",
      image: "/Images/food&travel.jpeg",
      route: "/outreach/food&travel",
    },
    {
      title: "Talks",
      image: "/Images/talk.jpeg",
      route: "/outreach/talks",
    },
  ];

  return (
    <><Header />
    <div className="outreach-container">

      {sections.map((section, index) => (
  section.route.startsWith("http") ? (
    <a
      key={index}
      href={section.route}
      target="_blank"
      rel="noopener noreferrer"
      className="outreach-section"
      style={{ backgroundImage: `url(${section.image})` }}
    >
      <div className="overlay">
        <h2>{section.title}</h2>
      </div>
    </a>
  ) : (
    <Link
      key={index}
      to={section.route}
      className="outreach-section"
      style={{ backgroundImage: `url(${section.image})` }}
    >
      <div className="overlay">
        <h2>{section.title}</h2>
      </div>
    </Link>
  )
))}

    </div>
    </>
  );
}
