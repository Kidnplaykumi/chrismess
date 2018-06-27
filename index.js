const form = document.querySelector('form#form1')
const form2 = document.querySelector('form#form2')

const listOfMovie = function(ev) {
    ev.preventDefault()
    const f = ev.target
    
    const life = f.life.value;
    const item = document.createElement('li')
    item.textContent = life
    

    const list = document.querySelector('#flicks')
    list.appendChild(item)

    f.reset() 
  }


const listOfArtist = function(ev){
  ev.preventDefault()
  const a = ev.target
  
  const life2 = a.life2.value;
  
  const item2 = document.createElement('li')
  
  item2.textContent = life2
  console.log(item2)

  const list2 = document.querySelector('#flicks2')
  list2.appendChild(item2)

  a.reset()
}

  
  form.addEventListener('submit', listOfMovie)
  form2.addEventListener('submit', listOfArtist)
