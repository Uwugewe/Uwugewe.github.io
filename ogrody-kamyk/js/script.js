const slideShow = () => {
    let slidesImg = document.getElementById('slider');
    let imgNo = 1;
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

setTimeout(slideShow, 3000);
mobileMenu();