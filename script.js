
$(document).ready(function(){
  $(".hints-btn").click(function(){
    $(".hints").toggle();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('droplet').addEventListener('mouseover', function() {
      this.innerHTML = '💦';
  });

  document.getElementById('droplet').addEventListener('mouseout', function() {
      this.innerHTML = '&#128167;';
  });

  document.getElementById('back').addEventListener('mouseover', function() {
    this.innerHTML = '&#8601;';
  });

  document.getElementById('back').addEventListener('mouseout', function() {
    this.innerHTML = '&#8598;';
  });

});

window.onload = function() {
  var parent = document.querySelector('.interviews-nav');
  var inputs = Array.from(parent.getElementsByTagName('input'));

  // Define classes
  var classes = ['right', 'center', 'left'];

  // Assign a class to each input
  inputs.forEach(input => {
      // Choose a random class
      var randomClass = classes[Math.floor(Math.random() * classes.length)];

      // Assign the class to the input
      input.className = randomClass;
  });
};