import useScrollActiveLink from "../hooks/navigation/useScrollActiveLink";

export default function Header() {
    useScrollActiveLink(100);
    return (
        <>
            <header class="header-list">
                <div class="div-list ">
                    <ul class="ul-list">
                        <li class="active">
                            <i class="fa-regular fa-house"></i>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <i class="fa-regular fa-address-card"></i>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <i class="fa-regular fa-folder-open"></i>
                            <a href="#project">Projects</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-code"></i>
                            <a href="#services">services</a>
                        </li>
                        <li>
                            <i class="fa-regular fa-envelope"></i>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}