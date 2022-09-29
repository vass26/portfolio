function myFunction1() {
    document.getElementById("dropdown-answer").classList.toggle("answ");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.quesbtn')) {
      var dropdowns = document.getElementsByClassName("answer");
      for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains('answ')) {
          openDropdown.classList.remove('answ');
        }
      }
    }
  }
  
  function myFunction2() {
    document.getElementById("dropdown-answer2").classList.toggle("answ");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.quesbtn2')) {
      var dropdowns = document.getElementsByClassName("answer2");
      for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains('answ')) {
          openDropdown.classList.remove('answ');
        }
      }
    }
  }

  function myFunction3() {
    document.getElementById("dropdown-answer3").classList.toggle("answ");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.quesbtn3')) {
      var dropdowns = document.getElementsByClassName("answer3");
      for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains('answ')) {
          openDropdown.classList.remove('answ');
        }
      }
    }
  }

  function myFunction4() {
    document.getElementById("dropdown-answer4").classList.toggle("answ");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.quesbtn4')) {
      var dropdowns = document.getElementsByClassName("answer4");
      for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains('answ')) {
          openDropdown.classList.remove('answ');
        }
      }
    }
  }

  function myFunction5() {
    document.getElementById("dropdown-answer5").classList.toggle("answ");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.quesbtn5')) {
      var dropdowns = document.getElementsByClassName("answer5");
      for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains('answ')) {
          openDropdown.classList.remove('answ');
        }
      }
    }
  }

