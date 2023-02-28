var links = document.querySelectorAll("#links a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    e.preventDefault();

    alert("anda akan menuju ke" + this.getAttribute("href"));
  });
}
