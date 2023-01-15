import Jogador from '../Jogador'
import './Times.css'

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    return (
        
        (props.jogadores.length > 0) ? <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
               <div className='jogadores'>

                {props.jogadores.map(jogador => <Jogador key={jogador.nome} corDeFundo={props.corPrimaria} nome={jogador.nome} estilo={jogador.estilo} imagem={jogador.imagem}/>)}

               </div>
        </section>
        : ''
    )

}

export default Time