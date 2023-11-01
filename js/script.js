(function () {
  var myDiv = document.getElementById("loader"),
    show = function () {
      myDiv.style.display = "block";
      setTimeout(hide, 5000); // 5 seconds
    },
    hide = function () {
      myDiv.style.display = "none";
    };

  show();
})();

feather.replace()
