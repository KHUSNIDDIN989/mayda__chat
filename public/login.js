const socket = io();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("use", userName.value);

  window.location.replace("index.html");
});
