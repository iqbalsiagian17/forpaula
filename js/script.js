const wrapper = document.getElementById("wrapper");
const pesan = "Tamar";

function ubahPesan() {
  wrapper.innerHTML = "<h1>Paulaa</h1>";
}

wrapper.addEventListener("animationend", () => {
  ubahPesan();

  let hitungMundur = 3;
  const interval = setInterval(() => {
    if (hitungMundur === 0) {
      clearInterval(interval);
      window.location.href = "BirthdayCake.html";
    } else {
      wrapper.innerHTML = "<h1>" + hitungMundur + "</h1>";
      hitungMundur--;
    }
  }, 1000);
});

window.addEventListener("load", () => {
  wrapper.style.animationPlayState = "running";
});
