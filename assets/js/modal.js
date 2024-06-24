  // Get all modals
  var modals = document.getElementsByClassName("modal");

  // Get all buttons that open the modals
  var btns = document.getElementsByClassName("modal-trigger");

  // Get all <span> elements that close the modals
  var spans = document.getElementsByClassName("close");

  // When the user clicks on the button, open the corresponding modal
  for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function(event) {
      event.preventDefault();
      var modalId = this.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "block";
    }
  }

  // When the user clicks on <span> (x), close the corresponding modal
  for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
      this.parentElement.parentElement.style.display = "none";
    }
  }

  // When the user clicks anywhere outside of a modal, close it
  window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  }