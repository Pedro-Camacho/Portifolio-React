import React from "react";
import '../Styles/Contato.css'

export default function Contato() {
    const [email, setEmail] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [mensagem, setMsg] = React.useState("");

    const enviar = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Nome: ${nome}, Mensagem: ${mensagem}`);
    }

    return (
        <div className="contato">
            <h2 className="contato-section-titulo">Contato</h2>
            <form onSubmit={enviar} className="contato-form">
                <h3 className="contato-titulo">Enviar mensagem</h3>

                <div className="contato-field">
                    <label className="contato-label">Nome</label>
                    <input
                        name="nome"
                        type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required
                        className="contato-input"
                        placeholder="Seu nome"
                    />
                </div>

                <div className="contato-field">
                    <label className="contato-label">Email</label>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="contato-input"
                        placeholder="seu@email.com"
                    />
                </div>

                <div className="contato-field">
                    <label className="contato-label">Mensagem</label>
                    <textarea
                        name="mensagem"
                        value={mensagem}
                        onChange={e => setMsg(e.target.value)}
                        required
                        className="contato-input contato-textarea"
                        placeholder="Escreva sua mensagem..."
                    />
                </div>

                <button className="contato-btn">Enviar</button>
            </form>
        </div>
    );
}
