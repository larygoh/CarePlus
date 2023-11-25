import React from 'react'
import Navbar from '../Navbar';
import '../index.css';

function Home() {
    return (
        <>
            <Navbar />
            <section style={{ background: "linear-gradient(90deg, rgba(46,173,205,0.3) 0%, rgba(247,247,247,1) 60%)" }}>
                <div class="container pb-5">
                    <div class="row pt-5">
                        <div class="col-md-8 my-auto pt-5">
                            <h5><strong>CUIDANDO DE QUEM VOCÊ AMA</strong></h5>
                            <h1>Agora ficou rápido e fácil<br />procurar por cuidadores!</h1>
                            <h3>Saiba mais!</h3>
                        </div>
                        <div class="col-md-4">
                            <img class="img-fluid" src='images/logo.png' alt="Logo" />
                        </div>
                    </div>
                </div>
            </section>

            <div class="card text-center " >
                <div class="card-body mt-4">
                    <h4 class="card-title"><strong>Conheça nossos serviços!</strong></h4>
                    <p class="card-text">Nosso propósito é cuidar e incluir todas as pessoas e suas necessidades.</p>
                    <a href="/especialidades" class="btn">Veja as especialidades</a>
                </div>
            </div>

            <section class="text-center">
                <h4 class="mt-5"><strong>Saiba em quais situações podemos te ajudar:</strong></h4>
                <p>Sabemos que existem diversos modos de apoio desde acompanhante até pós-cirúrgico, por isso desenvolvemos um  amplo sistema de escolha para você cliente, podendo assim fazer uma escolha mais assertiva ao decidir qual assistência será melhor.</p>
            </section>

            <div class="container">
                <div class="row g-4 mt-3">
                    <div class="col">
                        <div class="card">
                            <img src="images/criancas.jpg" class="card-img-top" alt="Crianças"></img>
                            <div class="card-body">
                                <h5 class="card-title"><strong>Necessidades Especiais</strong></h5>
                                <p class="card-text">Pessoas com Síndrome de Down que necessitam de um profissional de saúde e Autistas com maior grau de suporte.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="images/idosos.jpg" class="card-img-top" alt="Idosos" />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Idosos</strong></h5>
                                <p class="card-text">Sabemos que ao passar dos anos, as limitações aumentam, por isso a área de ajuda para idosos é bem ampla.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="images/problemas-saude.jpg" class="card-img-top" alt="Criança portadora de Síndrome de Down" />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Patologias e Pós-Parto</strong></h5>
                                <p class="card-text">Patologias agudas ou clinicas, pós operatótrio ou pós parto são algumas das ocasiões que a CarePlus pode te ajudar!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="images/suporte.jpg" class="card-img-top" alt="Foto de aperto de mãos" />
                            <div class="card-body">
                                <h5 class="card-title"><strong>Suporte</strong></h5>
                                <p class="card-text">Depressão, ansiedade ou síndrome do pânico são doenças que alguns casos precisam de suporte.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                Copyright 2023 © - CarePlus™
            </footer>
        </>
    )
}

export default Home