let $btn = document.querySelector("#btnSwitch");
let ligth = true;

function changeTheme() {
  if (ligth) {
    $btn.style.width = "40px";
    setTimeout(function () {
      $btn.style.transform = "translateX(30px)";
      $btn.style.width = "10px";
    }, 300);
  } else {
    $btn.style.transform = "translateX(0px)";
    $btn.style.width = "40px";
    setTimeout(function () {
      $btn.style.width = "10px";
    }, 300);
  }
  ligth = !ligth;
}
