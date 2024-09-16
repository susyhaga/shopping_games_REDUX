//1)
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

//4) precisamos tipar o initialState que tem  o objeto itens como a tipagem GAME(array)
type carrinhoState = {
  itens: Game[] //tipagem: array itens contem todas as props de Games
}

//5) criar objeto (initalState) que sera o carrinhoState (do tipo GAME (com props))
const initialState: carrinhoState = {
  itens: []
}

//1) criar um slice(que passara ao reducer o state, action etc)
//com o slice vc DESPACHA uma ACAO p/ o reducer atualizar o estado inicial (carrinhoState),
const carrinhoSlice = createSlice({
  //nome do slice
  name: 'carrinho',

  //o reducer precisa receber um estado inicial que recebe um objeto do tipo (itens:Game[]
  //initialState eh uma propriedade redux
  initialState,

  //2) construcao de mudanca de estado com reducers
  //Reducer: (determina como o estado da aplicação será atualizado em resposta
  //a  uma ação. Ele recebe o estado atual e uma ação como parâmetros,
  //processa a ação e retorna o novo estado.
  //No Redux, o reducer é o coração da lógica de atualização do estado atraves da
  //action creator: ADICIONAR (que eh a acao que determina a mudanca dos estados).

  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      // adicionar = recebe STATE A ACTION (parametros) do tipo carrinhoState(objeto do tipo [])
      //que tem a propriedade ITENS do tipo array    itens: Game[]

      // payload é o dado que você deseja enviar para o Redux junto com uma ação (action).

      // Ele contém as informações necessárias para atualizar o estado no reducer.
      // Ele faz parte da action e é o conteúdo que será processado pelo reducer
      //para modificar o estado.

      // Quando você despacha uma ação, essa ação pode conter um payload,
      // que é acessado no reducer por meio de action.payload

      //ACTION CREATOR é uma função que cria a ação que será
      // despachada para o reducer atualizar o estado inicial

      ///Quando o reducer adicionar for acionado,
      //ele receberá a ação com o payload que contém esse objeto (itens = Game)
      const jogo = action.payload

      //3)funcao adicionarCarrinnho do App.tsx
      //se encontrar o jogo com id x, ele manda uma mensagem de alerta

      if (state.itens.find((game) => game.id === jogo.id)) {
        //state.itens  = (array q sera iterada)
        //game = é  um argumento passado como uma função de callback
        //(passada para outra função (o método find))

        //find(): Esse método percorre a array state.itens e tenta encontrar

        // o primeiro elemento que atenda à condição definida na função de callback.
        //  Neste caso, a condição é que o id do jogo no carrinho
        // seja igual ao id do jogo que está sendo passado na ação (jogo.id).
        alert('Item já adiconado')
      } else {
        // se nao encontrar, adicona o jogo ao carrinho
        state.itens.push(jogo)
      }
    }
  }
})

//6)
export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
//7)importar no store/index.ts
