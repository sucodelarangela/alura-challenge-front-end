function login() {
  swal({
    text: 'Digite seu nome de usuário no Github',
    content: 'input',
    icon: 'Images/github_icon.svg',
    button: {
      text: 'Buscar'
    }
  })
    .then(user => {
      if (!user) throw null

      return fetch(`https://api.github.com/users/${user}`)
    })
    .then(response => response.json())
    .then(data => {
      if (data.message == 'Not Found') {
        swal({
          title: 'Usuário não encontrado',
          icon: 'error'
        })
        throw new Error('Usuário inexistente')
      }
      const userInfo = {
        userName: data.name,
        userLink: data.html_url,
        userImage: data.avatar_url
      }
      localStorage.setItem('user', JSON.stringify(userInfo))
      location.reload()
    })
}

const userExists = JSON.parse(localStorage.getItem('user'))
const userTag = document.querySelectorAll('.card__owner, .header__user, .user')
const userLink = document.querySelectorAll('.user')

if (userExists != null) {
  userTag.forEach(elem => {
    elem.innerHTML = `<img src="${userExists.userImage}" class="header__user--photo" style="height: 2rem; clip-path: circle();"/>
    <h1 class="header__user--name" style="color:white;">${userExists.userName}</h1>`
  })
  userTag.forEach(link => {
    link.setAttribute('href', `${userExists.userLink}`)
    link.setAttribute('target', '_blank')
    link.removeAttribute('onclick')
  })
}
