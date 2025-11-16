export default function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="footer-container">
                    <h2 class="footer-logo">RafliFach</h2>
                    <ul class="footer-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div class="footer-social">
                    <a href="https://github.com/Saboo24" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/amine-hamzaoui-a2453a35b" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://wa.me/213554139526" target="_blank" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                    <p class="footer-copy">&copy; 2025 Rafli Fahri — Dibangun menggunakan vite/React</p>
                </div>
            </footer>
        </>
    );
}