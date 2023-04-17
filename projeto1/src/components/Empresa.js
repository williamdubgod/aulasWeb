import { useEffect, useState } from 'react'
import './css/style.css'

export default function Empresa() {

    const [contador, setContador] = useState(0);
    const [count, setCount] = useState(0);

    // Criando o hook useEffect 
    useEffect(() => {
        setTimeout(() => {
            setContador((contador) => contador +1);
            
        }, 1000);
    });

    //Criando um outro hook com useEffect
    useEffect(() => {
        document.title = `Clicou ${count}`
    }, [count])

    return (
        <div className="empresa">
        <h1>Empresa</h1>

        <h1>Início contador: {contador}</h1>
        <br />
        <h1>Você deu {count} cliques</h1>
        <button onClick={()=> setCount(count + 1)}>Clique</button>
        </div>
    )
}