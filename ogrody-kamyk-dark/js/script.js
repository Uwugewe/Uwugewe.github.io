const setLogoVersion = () => {
    if(window.innerWidth > 768) {
        let logo = document.querySelector('.logo');
        logo.setAttribute('src','../ogrody-kamyk-dark/img/logo-desktop.png');
    }
}

const slideShow = () => {
    let slidesImg = document.getElementById('slider');
    let imgNo = 1;

    if(window.innerWidth < 768) {
        setInterval(() => {
            slidesImg.className += 'fadeOut';
            setTimeout(() => {
                imgNo++;
                slidesImg.setAttribute('src',`../ogrody-kamyk-dark/img/header-img${imgNo}.jpeg`);
                slidesImg.className = '';
    
                if(imgNo === 4) {
                    imgNo = 0;
                }
            },500)
        },3000);
    }
}

const mobileMenu = () => {
    let hamburger = document.querySelector('.mobile-hamburger');
    hamburger.addEventListener('click', () => {
        let mobileMenu = document.querySelector('.mobile-holder');
        let mobileItems = document.querySelector('.mobile-items');
        mobileMenu.classList.toggle('visible');

        if(mobileMenu.classList.contains('visible')) {
            setTimeout(() => {
                mobileItems.style.display = 'flex';
            },250);
        } else {
            mobileItems.style.display = 'none';
        }
    });
}

const scrollEffectsServices = (elements) => {
    let windowHeight = window.innerHeight;
    let servicesSection = document.getElementById('services');
    let setTimeoutValue = -400;

    document.addEventListener('scroll', () => {
        if(servicesSection.getBoundingClientRect().top < windowHeight-(servicesSection.clientHeight/2) && !elements[0].classList.contains('animateCard')) {
            elements.forEach(element => {
                setTimeoutValue += 400;
                setTimeout(() => {
                    element.classList.add('animateCard');
                },setTimeoutValue);
            });
        }
    });
}

const scrollEffectsSection = (section) => {
    let windowHeight = window.innerHeight;
    
    document.addEventListener('scroll', () => {
        if(section.getBoundingClientRect().top < windowHeight-(section.clientHeight/2) && !section.classList.contains('animateSection')) {
            setTimeout(() => {
                section.classList.add('animateSection');
            },100);
        }
    });
}

const doSmthOnViewport = () => {
    let cards = document.querySelectorAll('.services-card-row');
    let aboutSection = document.getElementById('about');
    let projectsSection = document.getElementById('projects');

    scrollEffectsServices(cards);
    scrollEffectsSection(aboutSection);
    scrollEffectsSection(projectsSection);
}

setLogoVersion();
mobileMenu();
slideShow();
doSmthOnViewport();