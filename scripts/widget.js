class Widget {
  constructor(properties){
    this.properties = properties;
  }
  params = [];

  trigger(property){
    const trigger = document.querySelector(property.trigger);
    const target = document.querySelector(property.target);
    if (!trigger || !target) return;
    trigger.addEventListener('click', () => {
      target.classList.toggle('width--340px');
    });

  }

  init() {
    this.properties.forEach(property => {
      this.trigger(property);
    });
  }
}