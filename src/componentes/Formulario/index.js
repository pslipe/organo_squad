import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [estilo, setEstilo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoJogadorCadastrado({
            nome,
            estilo,
            imagem,
            time
        })
        setNome('');
        setEstilo('');
        setImagem('');
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar seu Squad.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu Nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Estilo" placeholder="Digite seu Estilo de Jogo" valor={estilo} aoAlterado={valor => setEstilo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true} label="Característica do Jogador" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao> Criar Jogador</Botao>
            </form>
        </section>


    )

}

export default Formulario;