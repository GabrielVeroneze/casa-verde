import { useRecoilValue } from 'recoil'
import { listaProdutosState } from '@/state/atom'

export const useListaProdutos = () => {
    const produtos = useRecoilValue(listaProdutosState)

    return {
        produtos,
    }
}
