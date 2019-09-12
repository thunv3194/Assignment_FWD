function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("default__tab").click();
// // jquery
// $(document).ready(function() {
//   //   $(".tablinks").on("click", function() {
//   //     $(".tabcontent").each(function(i) {
//   //       $(this).style.display = "none";
//   //     });
//   //     $(".tablinks").each(function(i) {
//   //       $(this).addClass(".active");
//   //     });
//   //   });

//   $("#default__tab").click();
// });

$(document).ready(function() {
  $(".js-toggle-menu").click(function(e) {
    e.preventDefault();
    $(".mobile-header-nav").slideToggle();
    $(this).toggleClass("open");
  });
});
