import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>
                {props.label}
                <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                    <option value=""></option>
                    {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                    })}
                </select>

            </label>
        </div>

    )
}

export default ListaSuspensa