import axios from 'axios'
import { useEffect, useState } from 'react'
import { IProduto } from '@/interfaces/IProduto'

export const useBuscarProdutos = () => {
    const [produtos, setProdutos] = useState<IProduto[]>([])

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
    }, [])

    return {
        produtos,
    }
}
