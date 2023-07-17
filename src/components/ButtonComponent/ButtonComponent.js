import './ButtonComponent.css'
export default function ButtonComponent (props){
  const{label,colorFondo}=props;
  const styleButton={
    backgroundColor:colorFondo,
  }
    return(
      <div>
        <button style={styleButton} className='button'>{label}</button>
      </div>
    )
  }