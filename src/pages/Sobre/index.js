import { useSelector } from 'react-redux';

const Sobre = () => {
    const user = useSelector( state => state.logged);

    return(
       <div>
        <h2>Olá, <span>{user.nome}.</span> Você está em nosso sistema teste!</h2>
        <br></br>
        <h3>Confirme seu email: <span>{user.email}</span></h3>
       </div>
    )
}

export default Sobre;