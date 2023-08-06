import './ButtonComponent.css';

export default function ButtonComponent(props) {
  const { label, colorFondo, onClick } = props;
  const styleButton = {
    backgroundColor: colorFondo,
  };

  return (
    <div>
      <button style={styleButton} className='button' onClick={onClick}>
        {label}
      </button>
    </div>
  );
}