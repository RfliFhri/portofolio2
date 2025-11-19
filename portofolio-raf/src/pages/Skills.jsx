import React from "react";
import SliderLoop from "../components/SliderLoop.jsx";
import "../assets/css/Capabilities.css";

/**
 * Capabilities section
 * Place icons in public/icons/ and pass their paths below.
 */
export default function Capabilities() {
  const url = "../src/assets/img/capabilities/";
  const frontendIcons = [
    url + "html.png",
    url + "css.png",
    url + "js.png",
    url + "bootstrap.png",
    url + "tailwind.png",
  ];

  const backendIcons = [
    url + "php.png",
    url + "lrvl.png",
    url + "mysql.png",
    url + "postgre.png",
  ];

  const toolsIcons = [
    "/icons/git.svg",
    "/icons/github.svg",
    "/icons/vscode.svg",
    "/icons/cpanel.svg",
  ];

  return (
    <section className="capabilities" id="capabilities">
      <h2 className="section-title">My Capabilities</h2>
      <p className="section-subtitle">
        Area fokus saya dalam pengembangan web — dari tampilan hingga backend & workflow.
      </p>

      <div className="capability-item">
        <div className="cap-left">
          <h3>Frontend</h3>
          <p className="desc">Pembuatan UI modern, responsif, dan optimal berbasis komponen.</p>
        </div>
        <div className="cap-right">
          <SliderLoop icons={frontendIcons} duration={18} />
        </div>
      </div>

      <div className="capability-item">
        <div className="cap-left">
          <h3>Backend</h3>
          <p className="desc">REST API, authentication, dan struktur backend yang mudah di-maintain.</p>
        </div>
        <div className="cap-right">
          <SliderLoop icons={backendIcons} duration={20} />
        </div>
      </div>

      <div className="capability-item">
        <div className="cap-left">
          <h3>Tools & Workflow</h3>
          <p className="desc">Version control, debugging, dan deployment sederhana.</p>
        </div>
        <div className="cap-right">
          <SliderLoop icons={toolsIcons} duration={16} />
        </div>
      </div>
    </section>
  );
}
