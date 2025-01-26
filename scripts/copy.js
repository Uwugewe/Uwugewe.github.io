class Copy {
  constructor(properties) {
    this.properties = properties;
    this.messages = new Messages;
  }
  properties = [];
  messages = null;

  copy = (property) => {
    const source = document.querySelector(property.source);
    const target = document.querySelector(property.target);
    if (!source || !target) return;
    source.addEventListener(property.event, () => {
      const text = target.outerText;
      navigator.clipboard.writeText(text);
      this.messages.createNotification("Skopiowano do schowka!", "copy");
    });
  };

  init = () => {
    this.properties.forEach(property => {
      this.copy(property);
    });
  };
}