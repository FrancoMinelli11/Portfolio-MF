document.addEventListener("DOMContentLoaded", () => {
    const burgerButtons = document.querySelectorAll(".menu-button");
    const sidebar = document.querySelector(".sidebar");

    burgerButtons.forEach(button => {
        button.addEventListener("click", () => {
            sidebar.classList.toggle("opened");
        });
    });

    
    const sidebarLinks = document.querySelectorAll(".sidebar-links a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("opened");
        });
    });


    const navLinks = document.querySelectorAll(".nav-links a");
    
    const sections = document.querySelectorAll("#about, #projects, #contact");

    const observerOptions = {
        root: null,
        rootMargin: "-25% 0px -70% 0px", 
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");

                navLinks.forEach(link => {
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("isActive");
                    } else {
                        link.classList.remove("isActive");
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        if (section) observer.observe(section);
    });
});