import Inputs from "../../components/homepage/Inputs";

function Login() {

    const inputs = [
        {
            id: 1,
            label: "Email",
            type: "email"
        },
        {
            id: 2,
            label: "Senha",
            type: "password"
        }
    ]

    return ( 
        <Inputs
            titulo='Login'
            descricao='Que bom que você voltou!'
            inputs={inputs}
            botao='Login'
            outraPagina='Não tem uma conta? Inscreva-se'
        />
     );
}

export default Login;