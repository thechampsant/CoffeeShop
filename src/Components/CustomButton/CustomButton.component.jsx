import './CustomButton.scss'

const CustomButton = (props) =>{
    const handleOps = () =>{
        props.operation()
    }
    return(
        <button className="customButton" style={{backgroundColor: props.name}} onClick={handleOps}>
            {props.children}
        </button>
    )
}

export default CustomButton