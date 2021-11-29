# Monster-form

<p>This Navbar is the Form in this library</p>

## For What ?

<p>for register || login || contact us pages</p>

## The Form v1

<a href="https://ibb.co/bzhpTT2"><img src="https://i.ibb.co/cD5z00C/form.gif" alt="form" border="0"></a>

## The Links is

```html
<link rel="stylesheet" href="style/form.css" />
<script defer type="module" src="js/form.js"></script>
```

## HTML

<details>
<summary>HTML</summary>
<p>

```html
<form method="" action="" id="validation_form">
  <h1 class="main_title">Register/Login/Contact Forms</h1>
  <label class="input">
    <input
      class="input__field"
      name="username"
      id="username"
      type="text"
      placeholder=" "
    />
    <span class="input__label">Username</span>
  </label>
  <br />
  <label class="input">
    <input
      class="input__field"
      name="email"
      id="email"
      type="email"
      placeholder=" "
    />
    <span class="input__label">Email</span>
  </label>
  <br />
  <label class="input">
    <input
      class="input__field"
      name="password"
      id="password"
      type="password"
      placeholder=" "
    />
    <span class="input__label">Password</span>
  </label>
  <br />
  <label class="input">
    <input
      class="input__field"
      name="password_confirmation"
      id="confirmation"
      type="password"
      placeholder=" "
    />
    <span class="input__label">Confirm Password</span>
  </label>
  <br />
  <label class="input">
    <input
      class="input__field"
      name="visa"
      id="visa"
      type="number"
      placeholder=" "
    />
    <span class="input__label">Visa</span>
  </label>
  <input id="submit_user" type="submit" value="Get Subscription" class="btn" />
</form>
```

</p>
</details>

## CSS

<p>This is CSS codes if you want SCSS don't take this codes and go down</p>
<details>
<summary>CSS</summary>
<p>

```css
@import url("https://rsms.me/inter/inter.css");
:root {
  --color-light: white;
  --color-dark: #212121;
  --color-signal: #da1862;
  --color-background: var(--color-light);
  --color-text: var(--color-dark);
  --color-accent: var(--color-signal);
  --size-bezel: 0.5rem;
  --size-radius: 4px;
  line-height: 1.4;
  font-family: "Inter", sans-serif;
  font-size: calc(0.6rem + 0.4vw);
  color: var(--color-text);
  background: var(--color-background);
  font-weight: 300;
}

.input {
  position: relative;
}
.input__label {
  position: absolute;
  left: 0;
  top: 0;
  padding: calc(var(--size-bezel) * 0.75) calc(var(--size-bezel) * 0.5);
  margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * 0.5);
  background: pink;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  background: var(--color-background);
  transition: transform 120ms ease-in;
  font-weight: bold;
  line-height: 1.2;
}
.input__field {
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 3px solid currentColor;
  padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);
  color: currentColor;
  background: transparent;
  border-radius: var(--size-radius);
}
.input__field:not(:-moz-placeholder-shown) + .input__label {
  transform: translate(0.25rem, -65%) scale(0.8);
  color: var(--color-accent);
}
.input__field:not(:-ms-input-placeholder) + .input__label {
  transform: translate(0.25rem, -65%) scale(0.8);
  color: var(--color-accent);
}
.input__field:focus + .input__label,
.input__field:not(:placeholder-shown) + .input__label {
  transform: translate(0.25rem, -65%) scale(0.8);
  color: var(--color-accent);
}

.button-group {
  margin-top: calc(var(--size-bezel) * 2.5);
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
}

.hidden {
  display: none;
}

form {
  width: 60%;
  margin: 5rem auto;
  height: 30rem;
}
form h1 {
  text-align: center;
  margin: 1rem auto;
  color: #dd6464 !important;
}
form .btn {
  all: unset;
  background-color: #cc0000;
  padding: 0.4rem 1.2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 0.5rem;
  color: #fff;
  margin-top: 2rem;
}

.error_inp {
  outline: none;
  border-color: #cc0000;
}
```

</p>
</details>

## JavaScript

<details>
<summary>JavaScript</summary>
<p>

```js
import User from "./User.class.js";
// the type of the class [ register \ login \ send ]
new User("register");
```

</p>
</details>
