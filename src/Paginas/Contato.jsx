import React from "react";
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

  return (<div className="h-screen">

    <form onSubmit={enviar} className="ml-[300px] mt-[200px] w-[700px] h-[500px] lg:w-[1200px] bg-container flex flex-col justify-items-center rounded-padrao border-r-4 border-b-4 border-sombra">
      <h1 className="font-jetBrains text-[30px] text-left text-white pl-[100px]">Enviar mensagem</h1>

      <label className="font-jetBrains text-[24px] text-left text-white pl-[100px] mt-[20px]">
        Email: 
      </label>
      <br/>
      <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required 
          className="w-[700px] ml-[100px]"
        />
        <br/>
      <label className="font-jetBrains text-[24px] text-left text-white pl-[100px] mt-[20px]">
        Nome:
      </label>
      <br/>
      <input
          name="nome"
          type="name"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required 
          className="w-[700px] ml-[100px]"/>
      <br/>
      <label className="font-jetBrains text-[24px] text-left text-white pl-[100px] mt-[20px]">
        Mensagem:       
      </label>
      <br/>
      <textarea
          name="mensagem"
          value={mensagem}
          onChange={e => setMsg(e.target.value)}
          required
          className="w-[700px] ml-[100px]"
          >
        </textarea>
        <br/>

      <button className="font-jetBrains text-[24px] text-left text-white ml-[100px]">Enviar</button>
    </form>
  </div>
  );
}