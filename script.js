// This is script file for this project...
// This is the code for capturing the HTML element for further DOM manipulations...
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <div class="key">
  ${e.key}
  <small>event.key</small>
</div>
<div class="key">
  ${e.keyCode === " " ? "Space" : e.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
  ${e.code}
  <small>event.code</small>
</div>
  `;
});
