export const formatarPreco = (preco: string) => {
    const precoFormatado = preco.slice(3, preco.length).replace(',', '.')

    return Number(precoFormatado)
}
