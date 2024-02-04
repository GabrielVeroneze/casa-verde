import axios from 'axios'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { listaProdutosState } from '@/state/atom'
import { IProduto } from '@/interfaces/IProduto'

export const useListaProdutos = () => {
    const [produtos, setProdutos] = useRecoilState(listaProdutosState)

    useEffect(() => {
        axios
            .get<IProduto[]>(
                'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsmi=231361624&utm_content=231361624&utm_source=hs_automation'
            )
            .then(resposta => {
                setProdutos(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [setProdutos])

    return {
        produtos,
    }
}
