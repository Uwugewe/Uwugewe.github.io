import Error from './error.js';
import Success from './success.js';
import Styles from '../styles.js';

const types = { Error, Success };

class Messages {
  constructor(properties) {
    this.messageProperties = new types[properties.type];
    this.createNotification(properties);
  }
  messageProperties = null;

  createNotification(properties) {
    const notification = document.querySelector(`#${properties.id}`);
    if (notification) return;

    const {styles} = this.messageProperties;
    const div = document.createElement("div");

    div.id = properties.id;
    (new Styles).addMany(div, styles);
    div.innerText = properties.message;

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
}

export default Messages;