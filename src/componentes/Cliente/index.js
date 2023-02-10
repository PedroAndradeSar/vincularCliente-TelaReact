import './Cliente.css';

const VincularCliente = (props) => {
    return (
        <div className="vinculaClienteCss">
            <div>
                <label>
                    {props.label}
                </label>
            </div>
            <input className="inputCss" placeholder={props.placeholder} />
        </div>

    )
}

export default VincularCliente;