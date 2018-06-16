const navHamburger = document.querySelector('#navHamburger');

navHamburger.addEventListener('click', (e) => {
    navHamburger.parentElement.classList.toggle('active');
})
/*
function myFunction() {
  var x = document.getElementById("container");
  if (x.className === "container") {
      x.className += " responsive";
  } else {
      x.className = "container";
  }
}
*/