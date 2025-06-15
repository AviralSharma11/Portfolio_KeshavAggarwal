import React from "react";
import "./Styles/Education.css";
import Header from "./Components/Header";

export default function Education() {
  return (
    <><Header />
    <section className="education-container">
      <div className="section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Ph.D. in Astronomy</strong> – IIT Indore <span className="edu-year">(Pursuing)</span>
          </li>
          <li>
            <strong>M.Sc. in Astronomy</strong> – IIT Indore <span className="edu-year">(2023)</span>
          </li>
          <li>
            <strong>B.Sc. in PCM</strong> – CCS University Meerut <span className="edu-year">(2021)</span>
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Feb 2022 – Aug 2022:</strong> Data Analyst & Management Intern at Armstrong Space Australia
            <br /><em>Project Head:</em> Abin Sharaf
          </li>
          <li>
            <strong>Aug 2022 – Feb 2023:</strong> Researcher (AI/ML & Orbital Mechanics) at ERETS Space London
            <br /><em>Project Head:</em> Dr. Abhiram Jayan Nair
          </li>
        </ul>
      </div>
    </section>
    </>
  );
}
