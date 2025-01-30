import Classes from './common/classes.js';

class Triggers {
  constructor(properties){
    this.init(properties);
  }

  trigger(property){
    const trigger = document.querySelector(property.trigger);
    const target = document.querySelector(property.target);
    if (!trigger || !target) return;
    trigger.addEventListener('click', () => {
      (new Classes).toggle(target, property.class);
    });

  }

  init(properties) {
    properties.forEach(property => {
      this.trigger(property);
    });
  }
}

export default Triggers;