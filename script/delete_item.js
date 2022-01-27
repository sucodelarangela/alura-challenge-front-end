const deleteButton = document.querySelectorAll('.delete__button')
const item = JSON.parse(localStorage.getItem('projects'))

console.log(deleteButton)

deleteButton.forEach(elem => {
  elem.addEventListener('click', function () {
    const card = elem.parentNode.parentNode.parentNode
    const cardName = card.querySelector('h1').textContent
    // console.log(cardName)
    const cardIndex = item.findIndex(item => item.projectName === cardName)
    // console.log(cardIndex)
    item.splice(cardIndex, 1)
    localStorage.setItem('projects', JSON.stringify(item))
    location.reload()
  })
})

// cardToDelete.forEach(elem => {
//   elem.addEventListener('click', function () {
//     item.splice(elem, 1)
//     localStorage.setItem('projects', JSON.stringify(item))
//     location.reload()
//   })
// })
