function scrollToBanner() {
  const stb = document.getElementById("targetHome");
  stb.scrollIntoView();
}

function scrollToOurPackage() {
  const stop = document.getElementById("targetOurPackage");
  stop.scrollIntoView({ behavior: "smooth" });
}
function srollToCallUs() {
  const stca = document.getElementById("targetCallUs");
  stca.scrollIntoView({ behavior: "smooth" });
}

var banner = document.querySelectorAll(".imgg img");
var currentImageIndex = 0;

function showNextImage() {
  banner[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % banner.length;
  banner[currentImageIndex].classList.add("active");
}
setInterval(showNextImage, 3000);

const name = document.getElementById("name");
const email = document.getElementById("email");
const selectOption = document.getElementById("selectOption");

function send() {
  if (!name.value || !email.value || !selectOption.value) {
    alert("Please fill in the form completely");
  } else {
    alert("Sending Data......");
  }
  return false;
}

const callUs = () => {
  window.location.href = "https://wa.me/6281271400716";
};
