const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
let load = 0

// Run every 30ms
let interval = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(interval)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// Stack overflow function to map numbers
function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
