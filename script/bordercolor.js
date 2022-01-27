//script to change the border color of the code editor

const border = document.getElementById('editor__box')
const input = document.getElementById('colorpicker')

input.addEventListener('input', setColor)

function setColor() {
  border.style.background = input.value
}
