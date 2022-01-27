// Variables which will be used to gather info provided by the user
const userLanguage = document.querySelector('.js-language')
const userCode = document.querySelector('.js-codearea')
const previewButton = document.querySelector('.js-preview')
const saveButton = document.querySelector('.js-save')
const projectTitle = document.querySelector('.js-title')
const projectDescription = document.querySelector('.js-description')
const cardColor = document.querySelector('.project__color')

// Sets localStorage for each saveButton in html

saveButton.addEventListener('click', () => {
  if (typeof Storage !== 'undefined') {
    if (!userCode.querySelector('code')) {
      swal(
        'Ops...',
        'Clique no botão Visualizar com o Highlight antes de salvar.',
        'error'
      )
    }
    checkLogin()
    saveToLocal()
    swal(
      'Seu projeto foi salvo!',
      'Visite a página da Comunidade para visualizá-lo!',
      'success'
    )

    // console.log('Yasss!')
  } else {
    swal(
      'Algo deu errado...',
      'Tente novamente mais tarde ou use outro navegador compatível.',
      'error'
    )
    // console.log('Oh no...')
  }
})

function saveToLocal() {
  const project = {
    projectName: projectTitle.value,
    projectDescription: projectDescription.value,
    projectLanguage: userLanguage.value,
    color: cardColor.value,
    code: userCode.querySelector('code').innerText
  }

  if (projectTitle.value == '') {
    swal(
      'E o nome do projeto?',
      'Forneça o nome do projeto antes de prosseguir',
      'info'
    )
    throw new Error('Falta informar o nome do projeto')
  }

  const projectsList = JSON.parse(localStorage.getItem('projects') || '[]')

  projectsList.push(project)

  localStorage.setItem('projects', JSON.stringify(projectsList))
  // setItem throws everything inside the () to the localStorage
  // JSON.stringify transforms everything in strings (standard format of data inside localStorage)
}

function checkLogin() {
  const userLogged = JSON.parse(localStorage.getItem('user'))
  if (userLogged == null) {
    swal('Usuário não encontrado', 'Faça login antes de prosseguir', 'info')
    throw new Error('Falta fazer login')
  }
}
