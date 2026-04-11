import React from "react";
import '../Styles/Contato.css'

export default function Contato(){
    const [email, setEmail] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [mensagem, setMsg] = React.useState("");

    const enviar = (event) => {
        console.log(`
            Email: ${email}
            Nome: ${nome}
            Mensagem: ${mensagem}
        `);
        event.preventDefault();
    }

    return (
        <div className="contato">
            <form onSubmit={enviar} className="contato-form">
                <h1 className="contato-titulo">Enviar mensagem</h1>

                <label className="contato-label">Email:</label>
                <br/>
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="contato-input"
                />
                <br/>
                <label className="contato-label">Nome:</label>
                <br/>
                <input
                    name="nome"
                    type="name"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required
                    className="contato-input"
                />
                <br/>
                <label className="contato-label">Mensagem:</label>
                <br/>
                <textarea
                    name="mensagem"
                    value={mensagem}
                    onChange={e => setMsg(e.target.value)}
                    required
                    className="contato-input"
                />
                <br/>
                <button className="contato-btn">Enviar</button>
            </form>
        </div>
    );
}
