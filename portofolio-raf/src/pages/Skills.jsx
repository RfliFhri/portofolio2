export default function Skills() {
    return (
        <>
            <section id="capabilities" class="cap-section" aria-labelledby="capabilities-title">
            <div class="container">
                <div class="cap-header">
                <p class="kicker">WHAT I DO</p>
                <h2 id="capabilities-title">My Capabilities</h2>
                <p class="lead">Beberapa area fokus saya dalam pengembangan web — dari tampilan hingga logika backend.</p>
                </div>

                <ul class="cap-grid" role="list">
                <li class="cap-card" role="listitem" aria-label="Frontend">
                    <span class="cap-icon" aria-hidden="true">
                    {/* <!-- example SVG icon, ganti sesuai kebutuhan --> */}
                    <i class="fa-solid fa-code fa-2xl"></i>
                    </span>
                    <h3 class="cap-title">Frontend</h3>
                    <p class="cap-desc">HTML · CSS · JavaScript · React · Tailwind CSS — fokus pada UI responsif dan aksesibilitas.</p>
                </li>

                <li class="cap-card" role="listitem" aria-label="Backend">
                    <span class="cap-icon" aria-hidden="true">
                    
                    <i class="fa-solid fa-database fa-2xl"></i>
                    </span>
                    <h3 class="cap-title">Backend</h3>
                    <p class="cap-desc">PHP (Laravel) · REST API · MySQL · Authentication — struktur kode rapi & mudah di-maintain.</p>
                </li>

                <li class="cap-card" role="listitem" aria-label="Tools">
                    <span class="cap-icon" aria-hidden="true">
                    <i class="fa-solid fa-screwdriver-wrench fa-2xl"></i>
                    </span>
                    <h3 class="cap-title">Tools & Workflow</h3>
                    <p class="cap-desc">Git · VSCode · Postman · Figma · Deployment sederhana (cPanel / shared hosting).</p>
                </li>
                </ul>
            </div>
            </section>

        </>
    );
}