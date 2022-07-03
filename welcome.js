document.getElementById("btn").addEventListener("click", runEvent);

function runEvent() {
  const xInput = document.querySelector(".a");
  const yInput = document.querySelector(".b");
  const loader = document.querySelector(".loader");
  if (xInput.value === "" || yInput.value === "") {
    xInput.focus();
  } else {
    loader.classList.add("see");
    yInput.value = "";
    xInput.value = "";
    setTimeout(() => {
      location.href = "./welcome.html";
    }, 2000);
  }
}
