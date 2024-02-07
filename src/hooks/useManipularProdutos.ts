import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { produtosManipuladosState } from '@/state/atom'
import { useListaProdutos } from '@/hooks/useListaProdutos'
import { formatarPreco } from '@/utils/formatarPreco'
import { IFiltroPreco } from '@/interfaces/IFiltroPreco'

export const useManipularProdutos = () => {
    const { produtos } = useListaProdutos()
    const [produtosManipulados, setProdutosManipulados] = useRecoilState(produtosManipuladosState)

    useEffect(() => {
        setProdutosManipulados(produtos)
    }, [produtos, setProdutosManipulados])

    const filtrarProduto = (preco: IFiltroPreco) => {
        const precoMinimoFormatado = formatarPreco(preco.precoMinimo)
        let precoMaximoFormatado = formatarPreco(preco.precoMaximo)

        if (precoMaximoFormatado === 0) {
            precoMaximoFormatado = 999
        }

        setProdutosManipulados(
            produtos.filter(
                produto =>
                    produto.preco >= precoMinimoFormatado &&
                    produto.preco <= precoMaximoFormatado
            )
        )
    }

    const ordenarProduto = (ordenador: string) => {
        switch (ordenador) {
            case 'relevantes':
                setProdutosManipulados(produtos)
                break
            case 'preco':
                setProdutosManipulados(
                    [...produtosManipulados].sort((a, b) => a.preco - b.preco)
                )
                break
            case 'nome':
                setProdutosManipulados(
                    [...produtosManipulados].sort((a, b) => a.name.localeCompare(b.name))
                )
                break
        }
    }

    return {
        filtrarProduto,
        ordenarProduto,
        produtosManipulados,
    }
}
