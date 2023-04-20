import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";

export default function Api2() {

    const[posts, setPosts] = useState([])
    
    //Criando função assincrona para resgatar os dados da Api

    const getPosts = async() => {

        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/posts/')
            const data = resp.data;

            setPosts(data)

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        getPosts()
    },[]) //Com o array vazio, a função vai ser executada uma vez no load da pagina

    return (
        <>

        <h1>Posts Atuais</h1>
        {posts.length === 0 ? <p>Atualizando</p> : (
            posts.map((post)=> (
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))
        )}

        </>
    )
}