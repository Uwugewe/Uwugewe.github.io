class Copy {
  constructor(properties, handleMessage = null) {
    this.properties = properties;
    this.handleMessage = handleMessage;
  }
  properties = [];
  handleMessage = null;

  copy = (property) => {
    const source = document.querySelector(property.source);
    const target = document.querySelector(property.target);
    if (!source || !target) return;
    source.addEventListener(property.event, () => {
      const text = target.outerText;
      navigator.clipboard.writeText(text);
      handleMessage("Skopiowano do schowka!");
    });
  };

  init = () => {
    this.properties.forEach(property => {
      this.copy(property);
    });
  };
}