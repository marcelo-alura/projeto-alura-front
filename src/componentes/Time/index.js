import React from 'react';
import Colaborador from '../Colaborador'
import './time.css'

const Time = ({ time, colaboradores, aoDeletar }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <input value={time.corSecundaria} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
            <div className='colaboradores'>
            {colaboradores.map((colaborador, indice) => {
                console.log(<Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} aoDeletar = {aoDeletar} />)

                return (
                    <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} aoDeletar = {aoDeletar} />
                )})}
            </div>
        </section>

    )
}

export default Time