const menuBtn = document.querySelector('.mobile')
    const navMenu = document.querySelector('.nav-menu')

    const mobileMenu = () => {
        menuBtn.classList.toggle('active')
        navMenu.classList.toggle('active')
    }

    menuBtn.addEventListener('click', mobileMenu)
    navMenu.addEventListener('click', mobileMenu)