import './CustomButton.scss'

const CustomButton = (props) =>{
    return(
        <button className="customButton" style={{backgroundColor: props.name}}>
            {props.children}
        </button>
    )
}

export default CustomButton