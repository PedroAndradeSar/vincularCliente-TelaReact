import VincularCliente from "../Cliente";
import Enviar from "./BotaoEnviar";
import './Formulario.css'

const Formulario = () => {
    return (
        <section>
            <div className="pagamentoCor">
                <div className="englobaTitulos">
                    <div>
                        <h2>
                            VINCULAR CLIENTE
                            <button className="fecharTela" onClick={handleClickEsc}>
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
                        <button className="buttonEnviar" onClick={handleClick}>
                            <strong>ENVIAR</strong>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

function handleClick(eventoDeClickEnviar) {
    eventoDeClickEnviar.preventDefault();
      console.log('O botão enviar foi clicado.');
}

function handleClickEsc(eventoDeClickEsc) {
    eventoDeClickEsc.preventDefault();
      console.log('O botão esc foi clicado.');
}

export default Formulario;
