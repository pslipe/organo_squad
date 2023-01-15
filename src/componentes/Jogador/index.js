import './Jogador.css'

const Jogador = ({nome, estilo, imagem, corDeFundo}) => {

    return (
        <div className='jogador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{estilo}</h5>
            </div>

        </div>
    )

}

export default Jogador