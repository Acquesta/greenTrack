import Inputs from "../../components/homepage/Inputs";

function Cadastro() {

    const inputs = [
        {
            id: 1,
            label: "Nome",
            type: "text"
        },
        {
            id: 2,
            label: "E-mail",
            type: "email"
        },
        {
            id: 3,
            label: "Senha",
            type: "password"
        },
        {
            id: 4,
            label: "Confirmar Senha",
            type: "password"
        }
    ]

    return ( 
        <Inputs
        titulo='Cadastro'
        descricao='Só mais alguns detalhes para você começar!'
        inputs={inputs}
        botao='Cadastrar'
        outraPagina='Já tem conta? Logue'
    />
     );
}

export default Cadastro;