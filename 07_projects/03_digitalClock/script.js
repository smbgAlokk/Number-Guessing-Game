const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// a function in JavaScript that is used to repeatedly execute a given function at a specified interval
