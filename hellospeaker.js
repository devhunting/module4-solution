var helloSpeaker = {};

helloSpeaker.speak = function(name) {
  var message = "Hello " + name;
  console.log(message);

  var greetingsDiv = document.getElementById("greetings");
  var p = document.createElement("p");
  p.textContent = message;
  p.className = "hello";
  greetingsDiv.appendChild(p);
};
