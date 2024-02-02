import axios from 'axios'
import { selector } from 'recoil'
import { IProduto } from '@/interfaces/IProduto'

export const buscaProdutosAsync = selector({
    key: 'buscaProdutosAsync',
    get: async () => {
        const resposta = await axios.get<IProduto[]>(
            'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsmi=231361624&utm_content=231361624&utm_source=hs_automation'
        )
        return resposta.data
    },
})