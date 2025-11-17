import { useState } from "react";

const Testimonials = () => {
  const [showMore, setShowMore] = useState(false);

  const testimonials = [
    {
      img: "/img/person1.jpg",
      name: "John Doe",
      role: "Frontend Developer",
      message:
        "Working with him is always smooth. He understands problems fast and delivers clean code.",
    },
    {
      img: "/img/person2.jpg",
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      message:
        "Highly collaborative and detail-oriented. Really elevates every project.",
    },
    {
      img: "/img/person3.jpg",
      name: "Kevin Smith",
      role: "Software Engineer",
      message:
        "Professional attitude and strong problem-solving skill. Recommended!",
    },
    {
      img: "/img/person4.jpg",
      name: "Emily Carter",
      role: "Project Manager",
      message:
        "Reliable and consistent. Always finishes tasks before deadline.",
    },
  ];

  const visibleItems = showMore ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="testimonial-section" id="testimonials">
      <h2 className="section-title">Testimonials</h2>
      <p className="section-desc">
        What people say about my work and collaboration.
      </p>

      <div className="testimonial-grid">
        {visibleItems.map((item, i) => (
          <div className="testimonial-card" key={i}>
            <img src={item.img} alt={item.name} className="avatar" />
            <div className="info">
              <h3>{item.name}</h3>
              <p className="role">{item.role}</p>
            </div>
            <p className="message">“{item.message}”</p>
          </div>
        ))}
      </div>

      {!showMore && (
        <button className="show-more-btn" onClick={() => setShowMore(true)}>
          Show More
        </button>
      )}
    </section>
  );
};

export default Testimonials;
