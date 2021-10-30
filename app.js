let $btn = document.querySelector("#btnSwitch");
let $body = document.querySelector(".body");
let $title = document.querySelector(".title");
let $containerSwitch = document.querySelector(".containerSwitch");
let $btnSwitch = document.querySelector(".btnSwitch");
let ligth = true;

let primary = "#ff0000";
let secondary = "#fff";

function colors() {
  $body.style.backgroundColor = primary;
  $btnSwitch.style.backgroundColor = secondary;
  $containerSwitch.style.border = `2px solid ${secondary}`;
  $title.style.color = secondary;
}

colors()

function changeTheme() {
  if (ligth) {
    $btn.style.width = "40px";
    setTimeout(function () {
      $btn.style.transform = "translateX(30px)";
      $btn.style.width = "10px";
      $body.style.backgroundColor = secondary;
      $btnSwitch.style.backgroundColor = primary;
      $containerSwitch.style.border = `2px solid ${primary}`;
      $title.style.color = primary;
    }, 300);
  } else {
    $btn.style.transform = "translateX(0px)";
    $btn.style.width = "40px";
    setTimeout(function () {
      $btn.style.width = "10px";
      $body.style.backgroundColor = primary;
      $btnSwitch.style.backgroundColor = secondary;
      $containerSwitch.style.border = `2px solid ${secondary}`;
      $title.style.color = secondary;
    }, 300);
  }
  ligth = !ligth;
}
