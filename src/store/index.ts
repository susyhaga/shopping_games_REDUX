import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import api from '../services/api' //para criar um reducer para requisicao http a api

//exportar store para ser usada nos useSelect = itens (App.tsx)
export const store = configureStore({
  //reducer aqui contem varias fatias de reducers
  reducer: {
    //define como o estado do carrinho muda em resposta às ações.
    //acoes  sao passadas atraves do action.payloa
    //adicionar = action creator/reducer

    carrinho: carrinhoReducer, //cria o reducer de carrinhoReducer
    //carrinho = slice  ( criado com createSlice)
    [api.reducerPath]: api.reducer //cria reducer da api
  },
  //criar um middleware(intermediador entre o dispatcher e o store)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

//type RootReducer = define o tipo do ESTADO GLOBAL do Redux(store) atraves do TS(ReturnType)

//ReturnType = extrai o tipo de retorno da funcao store.getState.
//typeof = inferencia de tipo
export type RootReducer = ReturnType<typeof store.getState>
//store.getState é uma funcao/metodo fornecido pelo Redux
//que retorna o estado atual da sua store.
// O estado retornado pode ter várias "fatias" (slices)
//dependendo de como você organizou seus reducers.
export default store
