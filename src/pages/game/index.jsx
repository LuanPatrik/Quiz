import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { questions, shuffle} from '../../database/questions';

import './styles.css';
import LogoQuiz from '../../assets/images/quiz.png';

function Game() {
  const navigate = useNavigation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionSelected, setquestionSelected] = useState([]);
  const [userAwnsers, setuserAwnsers] = useState([]);

  useEffect(()=>{
    if (questionSelected.length > 0) 
      return  

    const embaralhadas = shuffle(questions);
    const selectedQuestions = embaralhadas.slice(0,5);
    setquestionSelected(selectedQuestions);
  },[questionSelected])

  return (
    <div className="container">
      <img src={LogoQuiz} alt="Logo Quiz" className='logo' />
      <div className="card">
        <div className="card-questao">
          <h2 className='card-titulo'>Pergunta 1 de 5</h2>
          <p className='questao'>Qual a melhor linguagem de programação?</p>
        </div>

        <div className="card-resposta">
          <div className="card-opcao">
            <button className='card-opcao'>
              JavaScript
            </button>
            <button className='card-opcao'>
              Python
            </button>
            <button className='card-opcao'>
              C#
            </button>
            <button className='card-opcao'>
              Java
            </button>
            <button className='card-opcao'>
              C++
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game;