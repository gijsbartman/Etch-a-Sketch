const DEFAULT_COLOR = '#333333'
const DEFAULT_SIZE = 64

let currentColor = DEFAULT_COLOR
let currentSize = DEFAULT_SIZE

function setCurrentColor(newColor) {
    currentColor = newColor
}

const grid = document.getElementById('grid')
const colorPicker = document.getElementById('colorPicker')

colorPicker.oninput = (e) => setCurrentColor (e.target.value)

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-item')
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        if (i === 0) {
            gridElement.style.borderRadius = '10px 0 0 0'
        } else if (i === size - 1) {
            gridElement.style.borderRadius = '0 10px 0 0'
        } else if (i === size * size - 1) {
            gridElement.style.borderRadius = '0 0 10px 0'
        } else if (i === size * size - size) {
            gridElement.style.borderRadius = '0 0 0 10px'
        }
        grid.appendChild(gridElement)
    }
}

function changeColor(e) {
    console.log()
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = currentColor
}

setupGrid(DEFAULT_SIZE)