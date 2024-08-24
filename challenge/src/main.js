
const root = document.getElementById('root');
// welcome and img

const box1 = document.createElement('div');
box1.classList.add('box1');
root.append(box1);

const div_p = document.createElement('div');
div_p.classList.add('div-p');
box1.appendChild(div_p);

const img_p = document.createElement('p');
img_p.textContent = 'Welcome, We are glad to see you again!';
div_p.appendChild(img_p)

const img = document.createElement('img');
img.setAttribute('src', '/challenge/imges/Rectangle.svg');
box1.appendChild(img)
//form

const box2 = document.createElement('div');
box2.classList.add('box2');
root.append(box2);


const form = document.createElement('form');
box2.appendChild(form)

const h1 = document.createElement('h1');
h1.textContent = 'Sing Up';

const first_label = document.createElement('label');
first_label.textContent = 'First Name';

const first_input = document.createElement('input');
first_input.setAttribute('type', 'text');
first_input.setAttribute('placeholder', 'Enter Your first name');

const last_label = document.createElement('label')
last_label.textContent = 'last Name';

const last_input = document.createElement('input');
last_input.setAttribute('type', 'text');
last_input.setAttribute('placeholder', 'Enter Your last name');

const email_label = document.createElement('label');
email_label.textContent = 'email Name';

const email_input = document.createElement('input');
email_input.setAttribute('type', 'text');
email_input.setAttribute('placeholder', 'Email Address');

const pas_label = document.createElement('label');
pas_label.textContent = 'Password';

const pas_input = document.createElement('input');
pas_input.setAttribute('type', 'text');
pas_input.setAttribute('placeholder', 'Re enter Password');

const container_p = document.createElement('div');
container_p.classList.add('container-p')
const p = document.createElement('p');
const a = document.createElement('a');
a.setAttribute('href' , '#')
p.textContent = 'Already have an account?';
container_p.appendChild(p);
a.textContent = 'log in';
container_p.appendChild(a)

// button

const button = document.createElement('button');
button.setAttribute('type' , 'submit');
button.textContent = 'Sign Up';
form.appendChild(button)

form.append(h1,first_label,first_input,last_label,last_input,email_label,email_input,pas_label,pas_input,container_p,button);

// Send input to api

button.addEventListener("click", handler);

async function handler() {
  try {
    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: first_input.value,
        lastName: last_input.value,
        password: email_input.value,
        email: pas_input.value,
      }),
    });
    const data = await res.json();
    console.log(data);
  } catch {
    (err) => console.log("SomeThing went Wrong!");
  }
}
