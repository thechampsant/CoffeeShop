import './PopNumber.scss'

export const PopNumber = (props) =>{
    return(
        <div className={props.cName}>
            {props.count}
        </div>
    )
}