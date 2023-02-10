import VincularCliente from "../Cliente";
import './Formulario.css'

const Formulario = () => {
    return (
        <section>
            <div className="pagamentoCor">
                <div className="englobaTitulos">
                    <div>
                        <h2>
                            VINCULAR CLIENTE
                            <button className="fecharTela">
                                <strong>(ESC) FECHAR</strong>
                            </button>
                        </h2>
                    </div>
                    <div className="tituloPagamento">
                        <form>
                            <VincularCliente label="VINCULAR O CLIENTE: " placeholder="Digite o nome do cliente" />
                            <VincularCliente label="PARA O CLIENTE: " placeholder="Digite o nome do cliente" />
                        </form>
                    </div>
                    <div >
                        <button className="buttonEnviar">
                            <strong>ENVIAR</strong>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Formulario;
