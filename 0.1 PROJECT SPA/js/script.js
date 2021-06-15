const mobileMenu = () => {
    document.querySelector('.mobile-hamburger').addEventListener('click', () => {
        let closeX = document.querySelector('.mobile-close');
        let mobileMenu = document.querySelector('.open-mobile-holder');
        let mobileItem = document.querySelectorAll('.menu-item');
        mobileMenu.classList.add('display-block');

        closeX.addEventListener('click', () => {
            mobileMenu.classList.remove('display-block');
        });
        mobileItem.forEach(item => {
            item.addEventListener('click', () => {
                mobileMenu.classList.remove('display-block');
            });
        });
    });
}

const removeMobileHolderClass = () => {
    let mobileHolder = document.getElementById('mobile-holder');
    if (window.innerWidth > 992 ) {
        mobileHolder.classList.remove('open-mobile-holder');
    } else {
        if (!mobileHolder.classList.contains('open-mobile-holder') ) {
            mobileHolder.classList.add('open-mobile-holder');
        }
    }
}

const viewportElements = () => {
    let tiles = document.querySelectorAll('.tile-active');
    let profile = document.querySelectorAll('.profile');
    let cards = document.querySelectorAll('.card');

    mobileHoverTiles(tiles);
    mobileHoverCards(cards);
    mobileHoverProfiles(profile);

}

const mobileHoverTiles = (elements) => {
    let windowHeight = window.innerHeight;
    elements.forEach(element => {
        let distanceFromTop = element.getBoundingClientRect();
        let elementHeight = element.clientHeight;
        if (window.innerWidth < 992) {
            if (distanceFromTop.top > windowHeight * 0.5 - elementHeight * 0.5 && distanceFromTop.top < windowHeight * 0.5 + elementHeight * 0.5) {
                element.style.opacity = '1';
            } else {
                element.style.opacity = '0';
            }
        }
    });
}

const mobileHoverProfiles = (elements) => {
    let windowHeight = window.innerHeight;
    elements.forEach(element => {
        let distanceFromTop = element.getBoundingClientRect();
        let elementHeight = element.clientHeight;
        if (window.innerWidth < 992) {
            if (distanceFromTop.top > windowHeight * 0.5 - elementHeight*1.2 && distanceFromTop.top < windowHeight - elementHeight ) {
                element.querySelector('.social-medias').style.height = '50px';
            } else {
                element.querySelector('.social-medias').style.height = '0';
            }
        }
    });
}

const mobileHoverCards = (elements) => {
    let windowHeight = window.innerHeight;
    elements.forEach(element => {
        let distanceFromTop = element.getBoundingClientRect();
        let elementHeight = element.clientHeight;
        if (window.innerWidth < 992) {
            if (distanceFromTop.top > windowHeight * 0.5 - elementHeight*1.2 && distanceFromTop.top < windowHeight - elementHeight*0.95 ) {
                element.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
                element.querySelector('button').style.backgroundColor = '#1ba4ce';
            } else {
                element.style.boxShadow = 'none';
                element.querySelector('button').style.backgroundColor = '#30383b';
            }
        }
    });
}

mobileMenu();
removeMobileHolderClass();
window.addEventListener('resize', removeMobileHolderClass);
document.addEventListener('scroll', viewportElements);