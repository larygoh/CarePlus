import React from 'react'
import Navbar from '../Navbar';

function Login() {
    return (
        <>
            <Navbar />

            <div class="container pt-5">
                <h3 class="pb-3">Já possui login? Faça seu acesso!</h3>
                <div class="card p-5">
                    <div class="form-group mb-2">
                        <label for="username">Usuário</label>
                        <input class="form-control" type="text"></input>
                    </div>
                    <div class="form-group mb-3">
                        <label for="password">Senha</label>
                        <input class="form-control" type="password"></input>
                    </div>

                    <a href="#" class="text-sm">Esqueci minha senha</a>

                    <button class="btn btn-sm btn-primary">Entrar</button>
                </div>
            </div>
           
        </>
    )
}

export default Login