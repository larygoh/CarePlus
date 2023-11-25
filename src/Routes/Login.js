import React from 'react'
import Navbar from '../Navbar';

function Login() {
    const logar = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;

        fetch("http://localhost:3003/login", {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: { "content-type": "application/json" }

        }).then(async (resp) => {
            var status = await resp.text();
            console.log(status)
            if (status == 'conectado') {
                window.location.href = "http://localhost:3000/Minhaconta"
            } else {
                alert('Nome ou senha inválidos!')
            }
        })
    }

    return (
        <>
            <Navbar />
            <div className="container pt-5">
                <h3 className="pb-3">Já possui login? Faça seu acesso!</h3>
                <div className="card p-5">
                    <form id="logar" method="post" onSubmit={(e) => logar(e)}>
                        <div className="form-group mb-2">
                            <label htmlFor="username">Usuário</label>
                            <input className="form-control" type="text" name="username" id="username"></input>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Senha</label>
                            <input className="form-control" type="password" name="password" id="password"></input>
                        </div>

                        <a href="#" className="text-sm">Esqueci minha senha</a>

                        <button className="btn btn-sm btn-primary mx-3" type="submit">Entrar</button>
                    </form>
                </div>
            </div>
            <div class="container pt-5">
                <h3>Não possui conta? Cadastre-se!</h3>
                <a href="" class="btn btn-sm btn-primary">Cadastrar</a>
            </div>
        </>
    )
}

export default Login