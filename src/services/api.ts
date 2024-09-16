// 1) IMPORTAR

// createApi: Serve para definir uma API.
// fetchBaseQuery: É uma função pré-configurada que facilita fazer requisições HTTP usando fetch.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// 5) importar funcao Game
//Game: Um tipo ou interface de dados importado, que representa a estrutura dos dados que sua API retorna.

import { Game } from '../App'

// 2) criar uma api com createAPI
const api = createApi({
  // 3) baseQuery: Define a base URL da API como 'http://localhost:4000'.
  //  Isso significa que todas as requisições feitas por essa API serão para esse servidor.
  baseQuery: fetchBaseQuery({
    //4) fetchBaseQuery: Internamente usa o método fetch do JavaScript para fazer as requisições HTTP.
    baseUrl: 'http://localhost:4000' //recordado de useEffect( fetch) em App.tsx
  }),
  //5)endpoints = endpoints: Um objeto que define os endpoints (pontos de acesso) da sua API.
  //Esses são os diferentes tipos de requisições que você pode fazer, como GET, POST, PUT, etc.

  //builder = construtor de endpoints
  endpoints: (builder) => ({
    //6) Definindo o endpoint getJogos
    //<Game[], void> = parametro1 (retorna um array), parametro2(retorna nada)

    //7) query: () => 'produtos': A função query define o caminho para a requisição. \
    //Neste caso, ele faz uma requisição para 'http://localhost:4000/produtos',
    //que espera retornar um array de produtos (jogos).

    getJogos: builder.query<Game[], void>({
      query: () => 'produtos' //query = funcao que retorna um array de produtos
    })
  })
})

//7) Exportando o Hook useGetJogosQuery
export const { useGetJogosQuery } = api

//8)exportar api
export default api

//9 faremos a requisicao de jogos diretamente em  Produtos do App.tsx
//removendo o useEffect todo e jogos={game} de Produtos
