const faveIcon = document.querySelectorAll('.card__favorites')

faveIcon.forEach(function (elem) {
  let isLikeGiven = false

  elem.addEventListener('click', function () {
    const span = elem.querySelector('span')
    const icon = elem.querySelector('i')

    let likeCount = Number(span.innerText)

    if (isLikeGiven) {
      span.innerText = likeCount - 1
      icon.style.color = 'white'
      isLikeGiven = false
    } else {
      span.innerText = likeCount + 1
      icon.style.color = '#F65151'
      isLikeGiven = true
    }
  })
})
