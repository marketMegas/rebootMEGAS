/*==================================================
    STICKY HEADER
==================================================*/

const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*==================================================
    SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});

/*==================================================
    ANIMACIÓN DE APARICIÓN
==================================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(

    ".service-card,.counter-card,.security-item,.hero-card,.cta-box,.emergency-card"

).forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

/*==================================================
    CONTADORES
==================================================*/

const counters = document.querySelectorAll(".counter-card h3");

const speed = 120;

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const text = counter.innerText;

            const value = parseInt(text.replace(/\D/g, ""));

            if (isNaN(value)) return;

            let count = 0;

            const update = () => {

                const increment = value / speed;

                count += increment;

     if (count < value) {

                    counter.innerText = "+" + Math.floor(count).toLocaleString();

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = "+" + value.toLocaleString();

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

}, { threshold: .5 });

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==================================================
EFECTO PARALLAX HERO
==================================================*/

const truck = document.querySelector(".hero-truck");

window.addEventListener("mousemove", (e) => {

    if (!truck) return;

    let x = (window.innerWidth / 2 - e.pageX) / 80;

    let y = (window.innerHeight / 2 - e.pageY) / 80;

    truck.style.transform = `translate(${x}px,${y}px)`;

});


/*==================================================
BOTONES RIPPLE
==================================================*/

document.querySelectorAll(".btn-orange,.btn-service").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = diameter + "px";

        circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";

        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/*==================================================
HOVER SUAVE EN TARJETAS
==================================================*/

document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =

            `radial-gradient(circle at ${x}px ${y}px,#ffffff,#fbfbfb)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#fff";

    });

});

/*==================================================
BOTÓN SUBIR
==================================================*/

const topButton = document.createElement("button");

topButton.className = "scrollTop";

topButton.innerHTML = '<i class="bi bi-chevron-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    topButton.classList.toggle("active", window.scrollY > 400);

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
