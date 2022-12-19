import './SignIn.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from '../../store/reducers/logged'

const SignIn = () => {

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        
        const userLogado = users.find( user => user.email === email && user.senha === senha)
        dispatch(login([userLogado.email, userLogado.nome]));
        navigate('/');
    }
    
    return(
        <div className="form">
            <h1>Faça seu login.</h1>
            <form onSubmit={handleForm} >
                <label>Email</label>
                <input  value={email} type="email"  placeholder={"Digite seu email"}  onChange={evento => setEmail(evento.target.value)}/>

                <label>Senha</label>
                <input  value={senha} type="password"  placeholder={"Digite sua senha"}  onChange={evento => setSenha(evento.target.value)} />

                <button>Enviar</button>
            </form>
        </div>
        
    )
}

export default SignIn;