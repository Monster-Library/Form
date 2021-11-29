class User {
  /**
   * constructor() v1
   * @param {string} submitMethod the method you want to validation choose from these choices [ register, login, sendMail ]
   */
  constructor(submitMethod) {
    validation_form.addEventListener("keyup", (eo) => {
      User.validateInputs(eo.target);
    });

    submit_user.addEventListener("click", (eo) => {
      switch (submitMethod) {
        case "register":
          return User.registerUser(eo);
        case "login":
          return User.loginUser(eo);
        case "sendMail":
          return User.sendMail(eo);
        default:
          break;
      }
    });
  }
  /**
   * @method validateInputs(eo) v1
   * @description for validation of the inputs [ username, email, password, confirmation_password, visa, title[contact], message[contact] ]
   * @param {event} eo the inputs must validate it
   * @returns input validations
   */

  static validateInputs(eo) {
    // for know the input field type by the [[ name ]] attribute
    const type = eo.name;
    // the value length to check the inputs
    const val = eo.value.length;

    switch (type) {
      // to validate the username
      case "username":
        if (val < 4 || val > 20) {
          eo.classList.add("error_inp");
          return false;
        } else {
          eo.classList.remove("error_inp");
          return true;
        }
      // to validate the email address
      case "email":
        const regEmail =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regEmail.test(eo.value)) {
          eo.classList.remove("error_inp");
          return true;
        } else {
          eo.classList.add("error_inp");
          return false;
        }
      // to validate the password of the user
      case "password":
        const regPassword =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        if (regPassword.test(eo.value)) {
          eo.classList.remove("error_inp");
          return true;
        } else {
          eo.classList.add("error_inp");
          return false;
        }
      // to validate if the two passwords is identical
      case "password_confirmation":
        const password = document.querySelector("#password").value;
        if (password === eo.value && password !== "") {
          eo.classList.remove("error_inp");
          return true;
        } else {
          eo.classList.add("error_inp");
          return false;
        }
      // to validate the visa card
      case "visa":
        const regVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
        if (regVisa.test(eo.value)) {
          eo.classList.remove("error_inp");
          return true;
        } else {
          eo.classList.add("error_inp");
          return false;
        }
      // to validate the title of the message [ contact page ]
      case "title":
        if (val < 4 || val > 20) {
          eo.classList.add("error_inp");
          return false;
        } else {
          eo.classList.remove("error_inp");
          return true;
        }
      // to validate the message\description\content of the message [ contact page ]
      case "message":
        if (val < 50 || val > 350) {
          eo.classList.add("error_inp");
          return false;
        } else {
          eo.classList.remove("error_inp");
          return true;
        }
    }
  }

  /**
   * @method registerUser(eo) v1
   * @description  to validation the inputs before register
   * @param {event} eo the button you click on it to register
   * @returns true\false
   */
  static registerUser(eo) {
    if (
      !User.validateInputs(document.querySelector("#username")) ||
      !User.validateInputs(document.querySelector("#email")) ||
      !User.validateInputs(document.querySelector("#password")) ||
      !User.validateInputs(document.querySelector("#confirmation")) ||
      !User.validateInputs(document.querySelector("#visa"))
    ) {
      return eo.preventDefault();
    }
  }

  /**
   * @method loginUser(eo) v1
   * @description  to validation the inputs before login
   * @param {event} eo the button you click on it to login
   * @returns true\false
   */
  static loginUser(eo) {
    if (
      !User.validateInputs(document.querySelector("#email")) ||
      !User.validateInputs(document.querySelector("#password"))
    ) {
      return eo.preventDefault();
    }
  }

  /**
   * @method sendMail(eo) v1
   * @description  to validation the inputs before send the message [ for contact page ]
   * @param {event} eo the button you click on it to send message
   * @returns true\false
   */
  static sendMail(eo) {
    if (
      !User.validateInputs(document.querySelector("#title")) ||
      !User.validateInputs(document.querySelector("#message"))
    ) {
      return eo.preventDefault();
    }
  }
}

export default User;
