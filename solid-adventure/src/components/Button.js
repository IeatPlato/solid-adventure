import './Button.css'

const Button = () => {

let buttonStyle = typeof value = String ? "grey-button" : "blue-button";

        return <button className={buttonStyle}
                        onClick={()=> alert('button pressed')}>{value}</button>
}

export default Button; 