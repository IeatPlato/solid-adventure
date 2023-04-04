import './Button.css'

const Button = ({value}) => {
    let buttonStyle = typeof value === String ? 'gray-button' : 'blue-button'; 
 return <button
            className={buttonStyle}
    {value}
 </button>
}

export default Button;