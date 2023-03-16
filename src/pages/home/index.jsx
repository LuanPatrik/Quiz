import React from 'react';
import LogoQuiz from '../../assets/images/quiz.png';
import './styles.css';

function Home() {
  return (
    <div className="container">
        <h1 className='titulo'>Bem-vindo ao</h1>
        <img src={LogoQuiz} alt="Logo" className='logo'/>
        <small className='descricao'>Se divertido com esse Quiz insano!</small>

        <button className='btn-start'>🚀 Começar</button>

        <footer className='footer'>
            <span className='autor'>Criado por 
                <a href="https://github.com/LuanPatrik" target={"_blank"} rel="noreferrer" className='autor'> Luan Patrik😎</a>
            </span>
        </footer>
    </div>
  )
}

export default Home;