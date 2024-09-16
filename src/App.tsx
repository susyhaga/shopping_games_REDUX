import { Provider } from 'react-redux'
// É um componente fornecido pela biblioteca react-redux que conecta a store do Redux com o React.
// Ele é essencial para que os componentes React possam acessar e interagir com o estado gerenciado pelo Redux.
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

import { store } from './store'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      {/* Aqui estou passando a store para o Provider que ira deixar o ESTADO acessivel para todos os componentes  */}

      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
