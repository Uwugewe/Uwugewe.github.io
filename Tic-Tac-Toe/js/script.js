<<<<<<< HEAD
document.querySelectorAll('div').forEach(div => {
    let newElement = document.createElement('img');
    newElement.setAttribute('src','img/X.png');
    
    div.addEventListener('click', (e) => {
        e.target.classList.toggle('checked');
        e.target.appendChild(newElement);
    })
})
=======
let header = document.querySelector('.header');
let gameSection = document.querySelector('.game-section');
let gameDivs = gameSection.querySelectorAll('div');
let circle = false;
let figures = document.querySelectorAll('.change-figures img');

let checkIfWon = 0;

class Figure {
    constructor(name, src) {
        this.name = name,
        this.src = src,
        this.circle = circle
    }
    reTurn() {
        return !circle;
    }
}

const circleFigure = new Figure('circle', 'img/O.png');
const crossFigure = new Figure('cross', 'img/X.png');

figures.forEach(figure => {
    figure.addEventListener('click', (e) => {
        circle = e.target.classList.contains('change-O');
        header.style.display = 'none';
        gameSection.style.display = 'flex';
    });
});

const addFigureClass = (div, figure) => {
    if (!div.hasChildNodes()) {
        div.classList.add(figure);
    }
}

gameDivs.forEach(div => {
    div.addEventListener('click', () => {

        let newElement = document.createElement('img');

        if (circle) {
            newElement.setAttribute('src', circleFigure.src);
            circle = circleFigure.reTurn();
            addFigureClass(div, 'circle');
        } else {
            newElement.setAttribute('src', crossFigure.src);
            circle = crossFigure.reTurn();
            addFigureClass(div, 'cross');
        }
        div.classList.add('checked');

        if (!div.hasChildNodes()) {
            div.appendChild(newElement);
        }
        setTimeout( () => {
            checkingWinner('cross');
            checkingWinner('circle');
        }, 500);
        // checkingWinner('cross');
        // checkingWinner('circle');
    });
});

const resetAfterWin = (figure) => {
    alert(`${figure} WON !`);
    header.style.display = 'flex';
    gameSection.style.display = 'none';
    gameDivs.forEach(div => {
        div.classList = '';
    })
    gameSection.querySelectorAll('img').forEach(img => {
        img.remove();
    });
}

const checkingWinner = (figure) => {
    // gameDivs.forEach( (e, i) => {
    //     console.log(e, i);
    //     gameDivs[i].classList.contains(figure)
    // });


    //IN PROGRESS
    // for (let i=0; i<=2; i++) {
    //     // console.log(gameDivs);
    //     console.log(gameDivs[i]);
    //     if (gameDivs[i].classList.contains(figure)) {
    //         checkIfWon +=1;
    //     }
    //     console.log(checkIfWon);
    //     // if (checkIfWon == 3) {
    //     //     alert(`${figure} WON !`);
    //     //     header.style.display = 'flex';
    //     //     gameSection.style.display = 'none';
    //     //     gameDivs.forEach(div => {
    //     //         div.classList = 'checked';
    //     //         div.querySelector('img').remove();
    //     //     });
    //     //     return
    //     // }
    // }


    //w poziomie --->
    if (gameDivs[0].classList.contains(figure) && gameDivs[1].classList.contains(figure) && gameDivs[2].classList.contains(figure)) {
        resetAfterWin(figure);
        return
    }
    if (gameDivs[3].classList.contains(figure) && gameDivs[4].classList.contains(figure) && gameDivs[5].classList.contains(figure)) {
        resetAfterWin(figure);
        return
    }
    if (gameDivs[6].classList.contains(figure) && gameDivs[7].classList.contains(figure) && gameDivs[8].classList.contains(figure)) {
        resetAfterWin(figure);
        return
    }
    //w pionie |
    if (gameDivs[0].classList.contains(figure) && gameDivs[3].classList.contains(figure) && gameDivs[6].classList.contains(figure)) {
        resetAfterWin(figure);
        return
    }
    if (gameDivs[1].classList.contains(figure) && gameDivs[4].classList.contains(figure) && gameDivs[7].classList.contains(figure)) {
        resetAfterWin(figure);
        return
    }
    if (gameDivs[2].classList.contains(figure) && gameDivs[5].classList.contains(figure) && gameDivs[8].classList.contains(figure)) {
        resetAfterWin(figure);
        return
    }
    //na skos X
    if (gameDivs[0].classList.contains(figure) && gameDivs[4].classList.contains(figure) && gameDivs[8].classList.contains(figure)) {
        resetAfterWin(figure);
        return
    }
    if (gameDivs[2].classList.contains(figure) && gameDivs[4].classList.contains(figure) && gameDivs[6].classList.contains(figure)) {
        resetAfterWin(figure);
        return
    }
}
>>>>>>> e311e39119fa152f1f7b8125503e8062c97847e8
