import { useDispatch } from 'react-redux'
import { Game } from '../../App'
import * as S from './styles'
import { adicionar } from '../../store/reducers/carrinho' //action usada no dispatch

type Props = {
  game: Game
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Produto = ({ game }: Props) => {
  const dispatch = useDispatch() //chama a action creator e atualiza o store com ela.
  return (
    <S.Produto>
      <S.Capa>
        <S.Tag>{game.categoria}</S.Tag>
        <img src={game.imagem} alt={game.titulo} />
      </S.Capa>
      <S.Titulo>{game.titulo}</S.Titulo>
      <S.Plataformas>
        {game.plataformas.map((plat) => (
          <li key={plat}>{plat}</li>
        ))}
      </S.Plataformas>
      <S.Prices>
        {game.precoAntigo && <small>{paraReal(game.precoAntigo)}</small>}
        <strong>{paraReal(game.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(adicionar(game))} type="button">
        {' '}
        Adicionar Ao Carrinho
        {/* nao podemos chamar a action (adiconar) diretamente.
        Para manipular o estado precisamos usar a funcao dispatch (const dispatch = useDispatch)
        Adicionar ao carrinho */}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
