(function (window) {
  var goodbyeSpeaker = {};
  var speakWord = "Good Bye";

  goodbyeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.goodbyeSpeaker = goodbyeSpeaker;
})(window);
