import { atom } from 'recoil'
import { buscaProdutosAsync } from './selector'

export const listaProdutosState = atom({
    key: 'listaProdutosState',
    default: buscaProdutosAsync,
})
