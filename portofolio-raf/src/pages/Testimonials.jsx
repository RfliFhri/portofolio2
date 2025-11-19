import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/css/testimonials-swiper.css";

/**
 * TestimonialsSwiper
 * - Swiper with autoplay + arrows
 * - Responsive slidesPerView: 1 / 2 / 3
 * - "See All" opens modal with full grid
 */
export default function TestimonialsSwiper() {
  const [showAll, setShowAll] = useState(false);
  const modalRef = useRef(null);

  const testimonials = [
    { img: "/img/person1.jpg", name: "John Doe", role: "Frontend Dev", message: "Fast, clean code and great communication." },
    { img: "/img/person2.jpg", name: "Sarah Johnson", role: "UI/UX Designer", message: "Detail oriented and reliable." },
    { img: "/img/person3.jpg", name: "Michael Harris", role: "Software Engineer", message: "Solid backend implementations." },
    { img: "/img/person4.jpg", name: "Emily Carter", role: "Project Manager", message: "Delivered before deadline with quality." },
    { img: "/img/person5.jpg", name: "Alex Tan", role: "Founder", message: "Very easy to work with and proactive." },
    { img: "/img/person6.jpg", name: "Nina Putri", role: "Product Owner", message: "Thoughtful solutions and clear explanations." },
    { img: "/img/person7.jpg", name: "Rico S.", role: "CTO", message: "Good at breaking down complex problems." },
    { img: "/img/person7.jpg", name: "Rico S.", role: "CTO", message: "Good at breaking down complex problems." },
    { img: "/img/person7.jpg", name: "Rico S.", role: "CTO", message: "Good at breaking down complex problems." },
    { img: "/img/person8.jpg", name: "Maya L.", role: "Marketing Lead", message: "Design + dev synergy was excellent." }
    // add more if needed
  ];

  // Close modal on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setShowAll(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click outside to close modal
  useEffect(() => {
    function handler(e) {
      if (showAll && modalRef.current && !modalRef.current.contains(e.target)) {
        setShowAll(false);
      }
    }
    if (showAll) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showAll]);

  return (
    <>
      <section className="ts-section" aria-labelledby="ts-title" id="testimonials">
        <div className="ts-header">
          <h2 id="ts-title">Testimonials</h2>
          <p className="ts-desc">What people say about working with me — real feedback from collaborators and project partners.</p>
        </div>

        <div className="ts-swiper-wrap">
          <div className="swiper-button-prev custom-arrow"></div>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={18}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 }
            }}
            className="ts-swiper"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <article className="ts-card" aria-label={`Testimonial from ${t.name}`}>
                  <div className="ts-card-head">
                    <img src={t.img} alt={`${t.name} avatar`} className="ts-avatar" />
                    <div className="ts-meta">
                      <h3 className="ts-name">{t.name}</h3>
                      <p className="ts-role">{t.role}</p>
                    </div>
                  </div>
                  <p className="ts-message">“{t.message}”</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next custom-arrow"></div>
        </div>

        <div className="ts-actions">
          <button className="ts-seeall" onClick={() => setShowAll(true)}>See All Testimonials</button>
        </div>
      </section>

      {showAll && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="All testimonials">
          <div className="modal-window" ref={modalRef}>
            <div className="modal-header">
              <h3>All Testimonials</h3>
              <button className="modal-close" onClick={() => setShowAll(false)} aria-label="Close">✕</button>
            </div>

            <div className="modal-content">
              <div className="modal-grid">
                {testimonials.map((t, i) => (
                  <div className="modal-card" key={i}>
                    <div className="modal-row">
                      <img src={t.img} alt={`${t.name}`} className="modal-avatar" />
                      <div>
                        <h4 className="modal-name">{t.name}</h4>
                        <p className="modal-role">{t.role}</p>
                      </div>
                    </div>
                    <p className="modal-msg">“{t.message}”</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-close-btn" onClick={() => setShowAll(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
