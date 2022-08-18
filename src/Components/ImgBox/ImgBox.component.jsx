import Legend from '../Legend/Legend.component';
import './ImgBox.scss';

const ImgBox = (props) =>{
    
    return(
        <div className={props.cName === 'box-click' ? 'box box-click' : 'box'} style={{
            // backgroundImage:`url(require(${img})`,
            // backgroundRepeat:'repeat',
            // backgroundSize: '200rem 150rem',
            backgroundColor:props.bg,
            height: props.size,
            width: props.size
            }} onClick={()=>{
                props.random(props.item_no)
            }}>
            <img className='box__img' style={{
                height:props.imgHeight,
                width:props.imgWidth
                }} src={props.imgURL} alt="img"/>
            {
                props.rating && <Legend>
                                {props.rating}
                            </Legend>
            }
            
        </div> 
    )
}
export default ImgBox;