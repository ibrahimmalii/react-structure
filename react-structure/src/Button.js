const Button = (props) =>{
    return (
        <button onClick={props.whileClick}>{props.content}</button>
    )
}

export default Button;