import { useSelector } from 'react-redux' //funcao utilizada para extrair dados do store

import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store'

const Header = () => {
  //useSelector = funcao utilizada para extrair dados do store
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  // RootReducer: Isso é a tipagem do estado (em TypeScript), ajudando a garantir
  // que o state tenha o tipo correto.A função então retorna

  // state.carrinho.itens, que significa: acesse o estado global (state),
  // vá até a parte carrinho (que está no reducer carrinho) e pegue o array itens dentro desse estado.

  // state.carrinho: Refere-se à parte do estado global que está sendo gerenciada
  // pelo carrinhoReducer (que você configurou na store).

  // state.carrinho.itens: Aqui você está acessando especificamente a propriedade itens,
  //  que é provavelmente uma lista de produtos que o usuário adicionou ao carrinho.

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  //criar funcao vazia para fa
  return (
    <S.Header>
      <h1>Shopping Games</h1>
      <div>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
