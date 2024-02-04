import { useRecoilState } from 'recoil'
import { produtosManipuladosState } from '@/state/atom'
import { useListaProdutos } from '@/hooks/useListaProdutos'
import { formatarPreco } from '@/utils/formatarPreco'
import { IFiltroPreco } from '@/interfaces/IFiltroPreco'

export const useManipularProdutos = () => {
    const { produtos } = useListaProdutos()
    const [produtosManipulados, setProdutosManipulados] = useRecoilState(produtosManipuladosState)

    const filtrarProduto = (preco: IFiltroPreco) => {
        const precoMinimoFormatado = formatarPreco(preco.precoMinimo)
        let precoMaximoFormatado = formatarPreco(preco.precoMaximo)

        if (precoMaximoFormatado === 0) {
            precoMaximoFormatado = 999
        }

        setProdutosManipulados(
            produtos.filter(
                produto =>
                    produto.preco > precoMinimoFormatado &&
                    produto.preco < precoMaximoFormatado
            )
        )
    }

    return {
        filtrarProduto,
        produtosManipulados,
    }
}
