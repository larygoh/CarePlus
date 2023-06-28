import React from 'react'
import Navbar from '../Navbar';
import '../index.css';


function Especialidades() {
    return (
        <>
            <Navbar />
            <header class="cabecalho justify-content-end px-5 me-5">
                <div class="me-2">
                    <small>Ajudando a cuidar de quem você ama</small>
                </div>
                <div class="">
                    <img class="img-fluid" width="30px" src='images/logo-nav.jpeg' alt="Logo" />
                </div>
            </header>

            <main class="container pt-3">
                <div class="row">
                    <article class="col">
                        <h3 class="text-center pt-5 mb-4">Escolha a especialidade</h3>
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Acompanhante</h5>
                                </div>
                                <small class="mb-1">Indicamos o acompanhante para pacientes com necessidades especiais, suporte e idosos que são independentes.</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Pós-Cirúrgico</h5>
                                </div>
                                <small class="mb-1">Indicamos o cuidado pós-cirúrgico em patologias crônicas, pós-parto ou idosos que não são independentes.</small>                                
                            </a>
                        </div>
                    </article>

                    <article class="col">
                        <img class="img-fluid" src='images/especialidades.png' alt="Logo" />
                    </article>
                </div>
            </main>



        </>
    )
}

export default Especialidades