const form = document.querySelector('form')
var input =  document.getElementById("life").value;
const changeParagraph = function(text) {
    console.log("Hello")
    const h2 = document.querySelector('h2.H2')
    //sdocument.getElementById("life").value;
    h2.textContent = text 
    
  }
  form.addEventListener('submit', changeParagraph)
