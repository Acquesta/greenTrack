import { useState } from "react";
import Inputs from "../../components/homepage/Inputs";

function RedefinirSenha() {
    const [inputs, setInputs] = useState([
        { id: 1, label: "Email", type: "email", value: "" },
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

    const atualizarUsuarios = (usuarios) => {
        localStorage.setItem("Usuarios", JSON.stringify(usuarios));
    };

    const redefinirSenha = () => {
        const email = inputs[0].value;

        if (!email.trim()) {
            alert("Por favor, insira seu email.");
            return;
        }

        const usuariosCadastrados = puxaUsuarios();
        const usuarioIndex = usuariosCadastrados.findIndex(
            (usuario) => usuario.email === email
        );

        if (usuarioIndex !== -1) {
            const novaSenha = prompt("Digite sua nova senha:");
            if (!novaSenha || novaSenha.trim() === "") {
                alert("Senha não pode ser vazia.");
                return;
            }

            const confirmarSenha = prompt("Confirme sua nova senha:");
            if (novaSenha !== confirmarSenha) {
                alert("As senhas não coincidem.");
                return;
            }

            usuariosCadastrados[usuarioIndex].senha = novaSenha;
            atualizarUsuarios(usuariosCadastrados);

            alert("Senha redefinida com sucesso!");
        } else {
            alert("Email não encontrado.");
        }
    };

    return (
        <Inputs
            titulo="Redefinir Senha"
            descricao="Digite o email associado à sua conta."
            inputs={inputs}
            botao="Redefinir Senha"
            mudaValue={mudaValue}
            funcao={redefinirSenha} 
        />
    );
}

export default RedefinirSenha;
