class Messages {
  styles = {
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
    "border-radius": "7px"
  };

  createNotification(message) {
    const div = document.createElement("div");

    for (let [key, value] of Object.entries(this.styles)) {
      div.style[key] = value;
    }

    div.innerText = message;

    document.querySelector('body').appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 3000);
  };

  handle = (message) => {
    this.createNotification(message)
  };
}