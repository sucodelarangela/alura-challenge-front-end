// Step 3: Create a const to gather the area where the cards will be displayed and a const to gather the projects from localStorage
const allProjects = document.querySelector('.js-all-projects')
const projectsList = JSON.parse(localStorage.getItem('projects') || '[]')

projectsList.forEach((project, index) => {
  const card = document.createElement('div')
  card.classList.add('cards')
  card.innerHTML = `
    <div class="card__box" style="background: ${project.color};">
      <div class="card__border">
        <img src="Images/mac_buttons.svg" alt="Botões do Mac">
        <div class="editor__code">
          <code class="hljs ${project.projectLanguage}" style="white-space: pre-wrap;">${project.code}</code>
        </div>
        <div class="overlay" style="background: ${project.color};"></div>
        <div class="delete__button"><a href="#"><img src="Images/trash.svg"></a></div>
      </div>
    </div>
    <div class="card__content">
      <h1>${project.projectName}</h1>
      <p>${project.projectDescription}</p>
    </div>
    <div class="card__actions">
      <div class="card__buttons">
        <button type="button" class="card__comments"><i class="icon-bubble"></i>0</button>
        <button type="button" class="card__favorites"><i
          class="icon-heart"></i><span>0</span></button>
      </div>
      <a class="card__owner">
        <i class="header__user--photo icon-sign-in" style="font-size: 2rem"></i>
        <h1 class="user--name">Fazer login</h1>
      </a>
    </div>
  `
  // allProjects.innerHTML += card
  allProjects.appendChild(card)
  const codeContent = allProjects.querySelectorAll('.hljs')
  codeContent[index].textContent = project.code
})
