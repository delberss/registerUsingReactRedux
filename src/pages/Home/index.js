import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../store/reducers/logged'

import './Home.css';

const Home = () => {

    const users = useSelector(state => state.users);
    const logged = useSelector(state => state.logged);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        document.title = `Usuários cadastrados: ${users.length}`;
      }, users);

    return(
        <section className="container">
            <div className="logo">
                <h1>LOGO</h1>
            </div>

            <div className="menu">
                <ul>
                    <Link to={"/"}>HOME</Link>
                    <Link to={"/sobre"}>SOBRE</Link>
                    <Link to={"/ajuda"}>AJUDA</Link>
                </ul>
            </div>
           {
            !logged.userLogged ?
            <div className="acess">
                <div className="login">
                    <button onClick={() => navigate('/signin')}>LOGIN</button>
                </div>
                <div className="SignIn">
                    <button onClick={() => navigate('/signup')}>INSCREVER</button>
                </div>
            </div>
            :
            <>
                <h1>Olá,{logged.nome}</h1>
                <div className="SignOut">
                    <button onClick={() => dispatch(logout())}>SAIR</button>
                </div>
            </>
            
           }
        </section>
    )
}

export default Home;