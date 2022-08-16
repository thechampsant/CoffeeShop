import './Container.scss'

const Container = (props) =>{
    return(
        <div className={props.name}>
            {props.children}
        </div>
    )
}

export default Container;