import React, { useEffect, useState } from "react";
import Inputs from "../../components/homepage/Inputs";
import { useNavigate } from "react-router-dom";
import { parse } from "postcss";

function Login() {

    const navigate = useNavigate()

    const [inputs, setInputs] = useState([
        { id: 1, label: "Email", type: "email", value: "" },
        { id: 2, label: "Senha", type: "password", value: "" },
    ]);

    const mudaValue = (value, index) => {
        const updatedInputs = [...inputs];
        updatedInputs[index].value = value;
        setInputs(updatedInputs);
    };

    const puxaUsuarios = () => {
        const usuarios = JSON.parse(localStorage.getItem("Usuarios"));
        return usuarios || [];
    };

    const autenticarUsuario = () => {
        const email = inputs[0].value;
        const senha = inputs[1].value;

        if (!email.trim() || !senha.trim()) {
            console.log("Preencha todos os campos.");
            return;
        }

        const usuariosCadastrados = puxaUsuarios();
        const usuario = usuariosCadastrados.find(
            (u) => u.email === email && u.senha === senha
        );

        if (usuario) {
            alert("Login bem-sucedido!");
            navigate(`/Dashboard/${usuariosCadastrados.indexOf(usuario)}/home`)
            localStorage.setItem('user', JSON.stringify(usuario));
        } else {
            alert("Email ou senha incorretos.");
        }
    };

    const pegaIdUser = (usuario) => {
        const usuariosCadastrados = puxaUsuarios()
        const usuarioIndex = usuariosCadastrados.findIndex(
            (u) => u.email === usuario.email
        );
        return usuarioIndex
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) navigate(`/Dashboard/${pegaIdUser(user)}/home`)
    }, [])

    return (
        <Inputs
            titulo="Login"
            descricao="Que bom que você voltou!"
            inputs={inputs}
            botao="Login"
            outraPagina={["Não tem uma conta? Inscreva-se", '/Cadastro']}
            mudaValue={mudaValue}
            funcao={autenticarUsuario}
        />
    );
}

export default Login;
