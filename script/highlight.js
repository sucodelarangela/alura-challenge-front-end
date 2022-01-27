const language = document.querySelector('.project__language')
const codeArea = document.querySelector('.editor__code')
const button = document.querySelector('.editor__button')
const modeButton = document.querySelector('.mode__toggle')

function applyHighlight() {
  // usaremos innerText para não gerar conflito entre as tags html da nossa página e um provável código html que o user coloque no campo da página
  const code = codeArea.innerText.trim()
  codeArea.innerHTML = `<code class="hljs ${language.value}" aria-label="Editor de código"></code>`
  codeArea.querySelector('code').textContent = code
  // usamos textContent para evitar a perda de quebras de linha
  hljs.highlightElement(codeArea.querySelector('code'))
}

button.addEventListener('click', () => {
  applyHighlight()
})
