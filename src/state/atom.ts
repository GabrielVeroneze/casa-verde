import { atom } from 'recoil'
import { IProduto } from '@/interfaces/IProduto'

export const listaProdutosState = atom<IProduto[]>({
    key: 'listaProdutosState',
    default: [],
})

export const produtosManipuladosState = atom<IProduto[]>({
    key: 'produtosManipuladosState',
    default: [],
})
