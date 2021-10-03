const Button = (props) =>{
    //props is a built in param in react => passed from parent to child 
    console.log(props);
    return (
        <button onClick={props.whileClick}>{props.content}</button>
    )
}

export default Button;

