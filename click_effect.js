let removeTimeOut;

function clickPosition(e) {
  const target = document.getElementById("clickEffect"),
    a = 40; // width and height of #clickEffect / 2

  (e.button === 0) && (
    target.style.transform = `translate(${e.clientX - a}px, ${e.clientY - a}px)`,
    target.classList.contains("effect")
    ? (
      clearTimeout(removeTimeOut),
      target.classList.remove("effect"),
      void target.offsetWidth,
      target.classList.add("effect"),
      removeEffect()
    )
    : (
      target.classList.add("effect"),
      removeEffect()
    )
  )
}

function removeEffect() {
  removeTimeOut = setTimeout(function () {
    document.getElementById("clickEffect").classList.remove("effect")
  }, 500) // animation time of #clickEffect.effect::after (.5s) * 1000
}

document.addEventListener("mousedown", clickPosition)
