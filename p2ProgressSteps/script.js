const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    if ( currentActive + 1 > circles.length ) {
        return
    }

    currentActive++
    console.log({current: currentActive})

    update()
})

prev.addEventListener('click', () => {
    if ( currentActive <= 1 ) {
        return
    }

    currentActive--
    console.log({current: currentActive})

    update()
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    console.log({circles, actives})

    const percent = (actives.length - 1) / (circles.length -1) * 100
    progress.style.width = `${percent}%`

    if (currentActive ===1 ) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}