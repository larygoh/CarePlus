import React from 'react'
import Navbar from '../Navbar';
import '../index.css';

function Minhaconta() {
    return (
        <>
            <Navbar />
            <section>
                <div>
                    <img src="images/bgimg.png" className="bgimg" alt='Fundo'></img>
                </div>
                <div className='topico'>
                    <p className='text-end text-white'>Cuidando de quem você ama
                        <img src='images/logo.png' className='txt-img'></img>
                    </p>
                </div>
                <div>
                    <h2 className='text-white text-center'>Olá João!</h2>
                    <h4 className='text-white text-center'>Responsável de Lurdes</h4>
                    <h5 className='text-white text-center'>01331-000, São Paulo</h5>
                </div>
            </section>
            <div className='row'>
                <div className='card'>
                    <h5 className='card-text'><strong>Agendamentos</strong></h5>
                    <p className='card-text'>Data:07/12/2023</p>
                    <p className='card-text'>Cuidador: José Eduardo</p>
                    <p className='card-text'>Suporte - 12h</p>
                    <p className='card-text'>Diária: R$ 99,00</p>
                </div>

            </div>
        </>
    )

}

export default Minhaconta