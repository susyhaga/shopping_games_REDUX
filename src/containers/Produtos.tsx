import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'

import * as S from './styles'

const Produtos = () => {
  // useGetJogosQuery = hook do services/api.ts
  // jogos = resposta da api (data:jogos)
  // isLoading = Um booleano que indica se a requisição ainda está sendo carregada.

  const { data: jogos, isLoading } = useGetJogosQuery()
  if (isLoading) return <h2>Carregando...</h2>
  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          //jogos?.map(): O operador opcional ?. garante que o código só tentará mapear jogos
          //se a variável não for undefined
          // (ou seja, se a requisição já tiver sido concluída com sucesso).
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
