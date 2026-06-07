    const burguerButton = document.querySelectorAll(".menu-button")
    const sidebar = document.querySelector(".sidebar")

    burguerButton.forEach(button => {
    button.addEventListener("click", () => {
        sidebar.classList.toggle("opened")
    })})

    const navLinks = document.querySelectorAll(".nav-links a")
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            link.classList.add("isActive")
            navLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.classList.remove("isActive")
                }
            })
        })
    })
    
    const sidebarLinks = document.querySelectorAll(".sidebar-links a")
    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.toggle("opened")
        })
    })
