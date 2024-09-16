import jsonServer from 'json-server'

// Definição da função
function closeDescriptionPopup() {
  console.log('Popup fechado')
}

// Chamada da função em um evento
document
  .getElementById('closeButton')
  .addEventListener('click', closeDescriptionPopup)

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Adicionando o delay aqui
server.use((req, res, next) => {
  setTimeout(() => next(), 1000) // 1000 ms de delay
})

server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running on port 4000')
})
