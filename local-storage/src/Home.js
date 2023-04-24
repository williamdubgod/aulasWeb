import React from "react"
import './App.css'

export default function Home() {

    const handleSubmit = ()=> {
        localStorage.clear();
        window.location.reload();
      }

    return (
        <>
        <h1>Está é a página Home</h1>
        <button onClick={handleSubmit}>Logout</button>
        </>
    )
}