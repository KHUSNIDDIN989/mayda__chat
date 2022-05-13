const socket = io();
const input = document.querySelector("#msg");

socket.on("user", (data) => {
  const h2 = document.createElement("h2");
  h2.textContent = data;

  new__user.appendChild(h2);
});

const ul = document.createElement("ul");
const div = document.createElement("div");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const val = input.value;
  socket.emit("data", val);
  const li = document.createElement("li");
  ul.classList.add("user__ul");

  li.classList.add("user__li");

  li.textContent = val;
  console.log(val);

  ul.appendChild(li);
  chat__messages.appendChild(ul);
  e.target.reset();
});

socket.on("datali", (q) => {
  const li = document.createElement("li");
  li.textContent = q;

  div.classList.add("clint__ul");
  li.classList.add("user__li");

  div.appendChild(li);
  chat__messages.appendChild(div);
});
