class Messages {
  constructor(){
    this.styles = new Styles;
  }
  styles = null;

  stylesProperties = {
    width: "300px",
    height: "50px",
    background: "#393939",
    color: "#36d300",
    position: "fixed",
    top: "10px",
    left: "50%",
    transform: "translate(-50%, 0)",
    display: "flex",
    "font-weight": "500",
    "justify-content": "center",
    "align-items": "center",
    "border-radius": "7px",
    "animation": "fadeInDown .5s",
  };

  createNotification(message, id) {
    const notification = document.querySelector(`#${id}`);
    if(notification) return;

    const div = document.createElement("div");
    div.id = id;

    this.styles.addMany(div, this.stylesProperties);
    div.innerText = message;
    document.querySelector('body').appendChild(div);
    setTimeout(() => {
      this.removeNotification(div);
    }, 3000);
  };

  removeNotification(div) {
    div.style.animation = "fadeInUp .5s";
    setTimeout(() => {
      div.remove();
    }, 450);
  };

  handle = (message) => {
    this.createNotification(message)
  };
}