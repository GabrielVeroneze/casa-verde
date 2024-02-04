import { useRecoilState } from 'recoil'
import { produtosManipuladosState } from '@/state/atom'
import { useListaProdutos } from '@/hooks/useListaProdutos'
import { formatarPreco } from '@/utils/formatarPreco'
import { IFiltroPreco } from '@/interfaces/IFiltroPreco'

export const useManipularProdutos = () => {
    const { produtos } = useListaProdutos()
    const [produtosManipulados, setProdutosManipulados] = useRecoilState(produtosManipuladosState)


    return {
        filtrarProduto,
        produtosManipulados,
    }
}
