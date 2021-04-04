const slideShow = () => {

    let headerImg = document.querySelector('.header-image');
    let imgNo = 0;
    console.log(headerImg);

    setTimeout(() => {
        setInterval(() => {
            imgNo++;
            console.log(imgNo);
            headerImg.setAttribute('src',`../ogrody-kamyk/img/header-img${imgNo}.jpeg`);
            if(imgNo === 4) {
                imgNo = 0;
            }
        }, 3000);
    })
}

const hideStartup = () => {
    let startupDiv = document.querySelector('.welcome-message');
    console.log(startupDiv);
    setTimeout(() => {
        startupDiv.style.opacity = 0;
    }, 3000);
}

hideStartup();
slideShow();

