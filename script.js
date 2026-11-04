

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    menuToggle.textContent =
        navLinks.classList.contains("open") ? "✕" : "☰";

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";

    });

});



const year = document.querySelector(".footer-bottom");

year.innerHTML = `© ${new Date().getFullYear()} Clínica Dental Aura. Todos los derechos reservados.`;



const form = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!form.checkValidity()) {

        form.reportValidity();
        return;

    }

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const servicio = document.getElementById("servicio").value;

    if (telefono.trim().length < 8) {

        formMessage.textContent =
            "Por favor, introduce un teléfono válido.";

        formMessage.style.color = "red";

        return;

    }

    formMessage.textContent =
        `¡Gracias ${nombre}! Tu solicitud de ${servicio} fue recibida correctamente.`;

    formMessage.style.color = "#07998c";

    form.reset();

});



const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});


document.querySelectorAll(
    ".service-card, .testimonial-card, .feature-card"
).forEach(element => {

    observer.observe(element);

});



const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backTop.classList.add("visible");

    } else {

        backTop.classList.remove("visible");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});




const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
lucide.createIcons();