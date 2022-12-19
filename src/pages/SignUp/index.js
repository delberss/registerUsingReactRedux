import './SignUp.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from '../../store/reducers/users'

const SignUp = () => {

    const dispatch = useDispatch();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        dispatch(signup([nome,email,senha]));
        navigate('/');
    }
    
    return(
        <div className="form">
            <h1>Preencha com seus dados.</h1>
            <form onSubmit={handleForm} >
                <label>Nome</label>
                <input value={nome} type="text" placeholder={"Digite seu nome"} onChange={evento => setNome(evento.target.value)} />

                <label>Email</label>
                <input  value={email} type="email"  placeholder={"Digite seu email"}  onChange={evento => setEmail(evento.target.value)}/>

                <label>Senha</label>
                <input  value={senha} type="password"  placeholder={"Digite sua senha"}  onChange={evento => setSenha(evento.target.value)} />

                <button>Enviar</button>
            </form>
        </div>
        
    )
}

export default SignUp;