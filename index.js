const button = document.querySelector('button')
const changeParagraph = function() {
    const h2 = document.querySelector('h2.H2')
    h2.textContent = 'Kumi has a nice style'
  }
  button.addEventListener('click', changeParagraph)