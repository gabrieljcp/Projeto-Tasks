import React from 'react';
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {

  }

  return (
    <div className='mainContainer'>
      <div className="titleContainer">
        <div><strong>TASKS</strong></div>
      </div>
      <div>Gerenciador de tarefas</div>  
      <div className="buttonContainer">
         <input 
          type="button" 
          className="inputButton" 
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Entrar'}
         />
         {loggedIn ?<div>Your email adress is {email}</div> : <div />}
         <input 
          type="button" 
          className="inputButton" 
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Cadastrar'}
         />
      </div>
    </div>
  )
}

export default Home