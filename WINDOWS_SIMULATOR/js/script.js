let startup = document.getElementById('windows-loading');
let namesArr = ['blue.png','starting.gif','welcome.png'];
let delay = 0;

let errorMessage = document.querySelectorAll('.error-alert');

errorMessage.forEach( (e) => {
    e.addEventListener('touchmove', (e) => {
        let touchPosX = e.changedTouches[0].clientX;
        let touchPosY = e.changedTouches[0].clientY;
        let target = e.changedTouches[0].target;

        if(target.classList.contains('error-alert')) {

            let src = target.dataset.shine;
            let newWindow = document.createElement('img');
            let windowWidth = target.clientWidth;
            let windowHeight = target.clientHeight;

            target.style.visibility = 'hidden';
            newWindow.setAttribute('src', `img/${src}`);
            newWindow.setAttribute('class','new-window');

            let replace = document.getElementsByClassName('errors')[0].appendChild(newWindow);

            replace.style.position = 'absolute';
            replace.style.top = `${touchPosY-windowHeight*0.5}px`;
            replace.style.left = `${touchPosX-windowWidth*0.5}px`;

        }
        let imagesOnPage = document.querySelectorAll('img');

        if(imagesOnPage.length == 350) {

            namesArr.forEach( (e,i) => {
                delay = 3000*i;
                startup.style.display='block';

                setTimeout( () => {
                    startup.src=`img/${e}`;
                    target.style.visibility = 'visible';
                    if (i == 2) {
                        setTimeout( () => {
                            startup.style.display='none';
                        },2000)
                    }
                },delay);
            });
            delay = 0;
        }

        target.style.left = `${touchPosX}px`;
        target.style.top = `${touchPosY}px`;  
    });

    e.addEventListener('touchend', () => {
        if (document.querySelectorAll('.new-window').length >= 350){
            document.querySelectorAll('.new-window').forEach( (e) => {
                e.remove();
            });
        }
    })
});
