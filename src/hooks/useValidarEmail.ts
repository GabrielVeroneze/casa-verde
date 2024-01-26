import { useState } from 'react'

export const useValidarEmail = () => {
    const [erroEmail, setErrosEmail] = useState<string>('')

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    const validacao = (emailUsuario: string) => {
        setErrosEmail('')

        if (!emailUsuario) {
            setErrosEmail('Este campo é obrigatório.')
            return
        }

        if (!regex.test(emailUsuario)) {
            setErrosEmail('Por favor, insira um e-mail válido.')
            return
        }

        alert(
            `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${emailUsuario}.`
        )
    }

    return {
        erroEmail,
        validacao,
    }
}
