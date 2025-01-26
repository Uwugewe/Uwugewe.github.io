class Animations {
  constructor(properties) {
    this.properties = properties;
    this.classes = new Classes;
    this.styles = new Styles;
  }

  properties = [];
  classes = null;

  once = (property) => {
    window.addEventListener(property.event, () => {
      const targets = document.querySelectorAll(property.target);
      targets.forEach(target => {
        const coordinates = target.getBoundingClientRect();
        if (coordinates.top >= 0 &&
          coordinates.top + (window.innerHeight / 4) <= (window.innerHeight || document.documentElement.clientHeight)) {
          const end = (property.duration * 1000) - 500;
          this.styles.add(target, "animation", `${property.animation} ${property.duration}s`);
          setTimeout(() => {
            this.classes.add(target, 'opacity--1');
          }, end);
        }
      });
    });
  };

  many = (property) => {
    const targets = document.querySelectorAll(property.target);
    targets.forEach(target => {
      target.addEventListener('click', () => {
        const end = (property.duration * 1000);
        this.styles.add(target, "animation", `${property.animation} ${property.duration}s`);
        setTimeout(() => {
          this.styles.remove(target, "animation");
        }, end);
      });
    });
  };

  init = () => {
    this.properties.forEach(property => {
      switch (property.event) {
        case 'click':
          this.many(property);
          break;
        case 'scroll':
          this.once(property);
          break;
        case 'load':
          this.once(property);
          break;
      }
    });
  }
}