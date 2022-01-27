//Script to resize textarea box

const textarea = document.getElementById('textarea') //desktop

textarea.addEventListener('input', function (e) {
  this.style.height = 'auto'
  this.style.height = this.scrollHeight + 'px'
})
