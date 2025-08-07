var byeSpeaker = {};

byeSpeaker.speak = function(name) {
  var message = "Good Bye " + name;
  console.log(message);

  var greetingsDiv = document.getElementById("greetings");
  var p = document.createElement("p");
  p.textContent = message;
  p.className = "goodbye";
  greetingsDiv.appendChild(p);
};
