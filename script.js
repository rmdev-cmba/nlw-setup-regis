const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  // alert('hello wordl')
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  // alert(dayExists)
  if (dayExists) {
    alert('Dia já incluso😠')
    return
  }
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

// buscando dados
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // caso não exista recebe objeto vazio
nlwSetup.setData(data)
nlwSetup.load()