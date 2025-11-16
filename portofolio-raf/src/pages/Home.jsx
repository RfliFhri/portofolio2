import TypingText from "../components/TypingText";

export default function Home() {
    return (
        <>
            <section class="home" id="home">
                <p class="home-p">
                    <span class="home-s">. </span>Available for freelance work
                </p>
                <div class="home-container">
                <div class="home-section">
                    <div class="info-home">
                        <h1>Hai, Saya Rafli</h1>
                        <TypingText className="typing"/>
                        <div class="info-p">
                        <p>Saya seorang Web Developer yang fokus pada pembuatan website modern </p>
                        <p>dan efisien menggunakan Laravel, Tailwind CSS, dan React. Saya terbiasa</p>
                        <p>menerjemahkan kebutuhan sederhana menjadi website yang cepat,</p>
                        <p>responsif, dan mudah digunakan. Saat ini saya menargetkan kolaborasi</p>
                        <p>freelance untuk proyek web berbasis perusahaan, UMKM, atau personal</p>
                        <p>portofolio</p>
                          
                        </div>
                        <div class="hhr">
                            <hr/>
                        </div>
                        <div class="info-p2">
                            <p><i class="fa-solid fa-location-dot"></i> Indonesia</p>
                            <p><i class="fa-solid fa-briefcase"></i> Available Now</p>
                        </div>
                        <div class="btnn">
                            <button class="btn-home1"><i class="fa-solid fa-arrow-right"></i> Hire Me</button>
                            <button class="btn-home2"><i class="fa-solid fa-download"></i> Download CV</button>
                        </div>
                    </div>
                </div>
                <img src="../src/assets/img/img2.jpg" alt=""/>
                </div>
            </section>
        </>
    );
}