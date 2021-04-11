const slideShow = () => {
    let slidesImg = document.getElementById('slider');
    let imgNo = 1;

    if(window.innerWidth < 768) {
        setInterval(() => {
            slidesImg.className += 'fadeOut';
            setTimeout(() => {
                imgNo++;
                slidesImg.setAttribute('src',`../ogrody-kamyk/img/header-img${imgNo}.jpeg`);
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

const setHeaderHeight = () => {
    if(window.innerWidth > 768) {
        let mainNav = document.querySelector('.main-nav');
        let backgroundImg = document.getElementById('slider');
        let welcomeMessage = document.querySelector('.welcome-message');
        let header = document.querySelector('header');
        console.log(mainNav.clientHeight);
        console.log(backgroundImg.clientHeight);
        header.style.height = `${backgroundImg.clientHeight - mainNav.clientHeight}px`;
        welcomeMessage.style.height = `${backgroundImg.clientHeight - mainNav.clientHeight}px`;
        console.log(welcomeMessage.clientHeight);
    }
}

mobileMenu();
slideShow();
setHeaderHeight();