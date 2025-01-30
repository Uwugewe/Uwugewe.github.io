import Messages from './common/messages/messages.js';

class Form {
  constructor(buttons) {
    this.init(buttons);
  }
  validate = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  init = (buttons) => {
    buttons.forEach(button => {
      const element = document.querySelector(button);
      element.addEventListener('click', (e) => {
        const email = e.target.form.querySelector('input[type=email]').value;
        if (!this.validate(email)) {
          new Messages({ type: "Error", message: "Nieprawidłowy adres email", id: "form-message" });
        }
      });
    });
  };
}

export default Form;