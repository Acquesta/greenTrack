import { useState } from "react";
import Inputs from "../../components/homepage/Inputs";
import { useNavigate } from "react-router-dom";

function Cadastro() {

    const navigate = useNavigate()
    const [inputs, setInputs] = useState([
        { id: 1, label: "Nome", type: "text", value: "" },
        { id: 2, label: "E-mail", type: "email", value: "" },
        { id: 3, label: "Senha", type: "password", value: "" },
        { id: 4, label: "Confirmar Senha", type: "password", value: "" },
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

    const verificaUsuario = (email) => {
        const usuariosCadastrados = puxaUsuarios();
        return usuariosCadastrados.some((usuario) => usuario.email === email);
    };

    const cadastrarUsuario = () => {
        if (inputs.some((input) => input.value.trim() === "")) {
            alert("Preencha todos os campos.");
            return;
        }
        if (inputs[2].value !== inputs[3].value) {
            alert("Senhas não coincidem.");
            return;
        }
        if (!verificaUsuario(inputs[1].value)) {
            const usuariosCadastrados = puxaUsuarios();
            localStorage.setItem(
                "Usuarios",
                JSON.stringify([
                    ...usuariosCadastrados,
                    {
                        nome: inputs[0].value,
                        email: inputs[1].value,
                        senha: inputs[2].value,
                    },
                ])
            );
            alert("Usuário cadastrado com sucesso!");
            navigate("/Dashboard/0/home")
        } else {
            alert("Usuário já existe.");
        }
    };

    return (
        <Inputs
            titulo="Cadastro"
            descricao="Só mais alguns detalhes para você começar!"
            inputs={inputs}
            botao="Cadastrar"
            outraPagina={["Já tem conta? Faça login", '/Login']}
            mudaValue={mudaValue}
            funcao={cadastrarUsuario}
        />
    );
}

export default Cadastro;
