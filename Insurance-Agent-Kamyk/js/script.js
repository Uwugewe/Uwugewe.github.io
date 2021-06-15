window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset);
    // console.log(document.body.offsetHeight);
    // console.log(window.innerHeight);
    // console.log('wynik: '+ window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    animationSteps();
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

  const animationSteps = () => {
      let house = document.getElementById('house');
      let car = document.getElementById('car');

      console.log(car.getBoundingClientRect().left);
  }

  animationSteps();