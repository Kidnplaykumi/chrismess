class App {
  constructor() {
    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.handleSubmit(ev)
    })
  }
  
renderProperty(name, value) {
  const span = document.createElement('span')
  span.classList.add(name)
  span.textContent = value
  return span
}

renderItem(flick) {
  const item = document.createElement('li')
  item.classList.add('flick')

  const properties = Object.keys(flick)

  properties.forEach((propertyName) => {
    const span = this.renderProperty(propertyName, flick[propertyName])
    item.appendChild(span)
  })

  return item
}

handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target

    const flick = {
      name: f.life.value,
      chris: f.life2.value,
    }

    this.flicks.push(flick)
    console.log(flick)
    
    const item = this.renderItem(flick)
    

    const list = document.querySelector('#flicks')
    list.appendChild(item)

    f.reset() 
  }
}

  const app = new App()
