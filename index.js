const button = document.querySelector('button')
const changeParagraph = function() {
    const h1 = document.querySelector('h1')
    h1.textContent = 'Kumi has a nice style'
  }
  button.addEventListener('click', changeParagraph)