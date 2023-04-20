import React from "react"
import { useForm } from "react-hook-form"
import './css/api.css'

export default function Api() {

    const{register, handleSubmit, setValue, setFocus} = useForm()
    const onSubmit = (e)=> {
        console.log(e);
    }

     //Função para checar o CEP
    const checkCep = (e) => {
        const cep = e.target.value.replace(/\D/g,'');
        //Passa o Cep que foi digitado esperando um JSON de resposta
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json()).then(data => { //transforma a resposta para um objeto JSON
            console.log(data);

            //setando os campos register
            setValue('rua', data.logradouro);
            setValue('bairro', data.bairro);
            setValue('cidade', data.localidade);
            setValue('estado', data.uf);
            setFocus('numero');
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Consumindo uma API</h1>
            <br />
            <label>CEP:<input type="text"{...register("cep")} onBlur={checkCep}/></label>
            <label>Rua:<input type="text"{...register("rua")}/></label>
            <label>Número:<input type="text"{...register("numero")}/></label>
            <label>Bairro:<input type="text"{...register("bairro")}/></label>
            <label>Cidade:<input type="text"{...register("cidade")}/></label>
            <label>Estado:<input type="text"{...register("estado")}/></label>

            <button type="submit" id="enviar">Enviar</button> <br />
        </form>
    )
}