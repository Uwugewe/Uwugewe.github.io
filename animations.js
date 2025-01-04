class Animations {
  constructor(events, sections) {
    this.events = events;
    this.sections = sections;
  }
  events = [];
  sections = [];

  animate = () => {
    this.sections.forEach(tag => {
      const section = document.querySelectorAll(tag);
      section.forEach(section => {
        const coordinates = section.getBoundingClientRect();
        if (coordinates.top >= 0 &&
          coordinates.left >= 0 &&
          coordinates.top + (window.innerHeight / 4) <= (window.innerHeight || document.documentElement.clientHeight) &&
          coordinates.right <= (window.innerWidth || document.documentElement.clientWidth)) {
          section.classList.add('fade-in');
          setTimeout(() => {
            section.classList.add('opacity--1');
          }, 1500);
        }
      });
    });
  }

  init = () => {
    this.events.forEach(eventToLoad => {
      window.addEventListener(eventToLoad, () => {
        this.animate();
      })
    });
  }
}