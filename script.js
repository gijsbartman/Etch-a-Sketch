const DEFAULT_COLOR = '#333333'
const DEFAULT_SIZE = 16

const grid = document.getElementById('grid')

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        grid.appendChild(gridElement)
    }
}

setupGrid(DEFAULT_SIZE)