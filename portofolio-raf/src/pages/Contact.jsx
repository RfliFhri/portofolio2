export default function Contact() {
    return (
        <>
            <section class="contact" id="contact">
                <p>CONTACT</p>
                <h1>Hubungi Saya</h1>
                <div class="contact-content">
                    <div class="contact-info slide-in-left">
                        <p>Saya selalu terbuka untuk membahas proyek-proyek menarik dan peluang-peluang baru. Mari berkolaborasi!</p>
                        <div class="contact-details">
                        <div class="contact-item">
                            <i class="fa-solid fa-envelope"></i>
                            <span>raflifachriansyah43504@gmail.com</span>
                        </div>
                        <div class="contact-item">
                            <i class="fa-solid fa-phone"></i>
                            <span>+62 851 5539 1422</span>
                        </div>
                        <div class="contact-item">
                            <i class="fa-solid fa-location-dot"></i>
                            <span>Indonesia, Tangerang Selatan</span>
                        </div>
                        </div>

                        <div class="social-links">
                        <a href="https://github.com/RfliFhri" class="social-link" target="_blank">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/amine-hamzaoui-a2453a35b" class="social-link" target="_blank">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://wa.me/213554139526" class="social-link" target="_blank">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                        </div>
                    </div>

                    <div class="contact-form slide-in-right">
                        <form id="contact-form">
                        <div class="form-group">
                            <input type="text" placeholder="Your Name" required name="user_name"/>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Your Email" required name="user_email"/>
                        </div>
                        <div class="form-group">
                            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn-send">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}