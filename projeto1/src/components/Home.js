import './css/style.css'
import React, {useState} from 'react'

export default function Home() {
    //criando o useState (manipulação o estado da variavel)

    const[nome, setNome] = useState('Will')
    const[email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    //Criando função para enviar email

    function enviarEmail(e) {
        e.preventDefault()

        setUserEmail(email)
        console.log(userEmail);
    }

    //Criando função para limpar o campo de email

    function limparCampo() {
        setUserEmail('')
    }

    return (
        <div className="home">
        <h1>Home</h1>
        <br />
        <p className='nome'>Nome: {nome}</p>
        <br />
        <button onClick={()=> setNome('Vulcano')}>Trocar</button>
        <br /><br />
        <h2>Cadastre seu E-Mail</h2>
        <input type='email' placeholder='Digite seu E-Mail' onChange={(e)=> setEmail(e.target.value)}/> 
        <button type='submit' onClick={enviarEmail}>Enviar</button>
        <br /><br />
        {/* {email} */}
        {/* Condicional para ver se o email esta preenhido */}
        {userEmail && (
            <div>
                <p id='userEmail'>O email do usuario é: <span>{userEmail}</span></p> <br />
                <button onClick={limparCampo}>Limpar</button>
            </div>
        )}
        </div>
    )
}