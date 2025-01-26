class Widget {
  constructor(properties){
    this.properties = properties;
    this.classes = new Classes;
  }
  params = [];
  classes = null;

  trigger(property){
    const trigger = document.querySelector(property.trigger);
    const target = document.querySelector(property.target);
    if (!trigger || !target) return;
    trigger.addEventListener('click', () => {
      this.classes.toggle(target, 'width--340px');
    });

  }

  init() {
    this.properties.forEach(property => {
      this.trigger(property);
    });
  }
}