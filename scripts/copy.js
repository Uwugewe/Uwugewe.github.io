import Messages from './common/messages/messages.js';

const messageProperties = { type: "Success", message: "Skopiowano do schowka!", id: "copy" };

class Copy {
  constructor(properties) {
    this.init(properties);
  }

  copy = (property) => {
    const source = document.querySelector(property.source);
    const target = document.querySelector(property.target);
    if (!source || !target) return;
    source.addEventListener(property.event, () => {
      const text = target.outerText;
      navigator.clipboard.writeText(text);
      new Messages(messageProperties);
    });
  };

  init = (properties) => {
    properties.forEach(property => {
      this.copy(property);
    });
  };
}

export default Copy;