import { NumericFormat } from 'react-number-format'
import styles from './InputReal.module.scss'

interface InputRealProps {
    placeholder: string
    value: string
    onChange: (evento: React.ChangeEvent<HTMLInputElement>) => void
}

const InputReal = ({ placeholder, value, onChange }: InputRealProps) => {
    return (
        <NumericFormat
            className={styles.campoTexto}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            thousandSeparator=","
            decimalSeparator="."
            prefix="R$ "
            decimalScale={2}
        />
    )
}

export default InputReal
