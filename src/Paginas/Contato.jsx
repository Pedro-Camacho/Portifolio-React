import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import '../Styles/Contato.css'

// TODO: substituir pelos valores reais do seu painel EmailJS
const EMAILJS_SERVICE_ID = 'service_ekycigy'
const EMAILJS_TEMPLATE_ID = 'template_zpzc88h'
const EMAILJS_PUBLIC_KEY = 'SrNuNUyZMFu4ubWKQ'

export default function Contato() {
    const formRef = useRef(null)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [status, setStatus] = useState('idle') // idle | loading | success | error

    const enviar = (event) => {
        event.preventDefault()
        if (status === 'loading') return
        setStatus('loading')

        emailjs
            .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
                publicKey: EMAILJS_PUBLIC_KEY,
            })
            .then(() => {
                setStatus('success')
                setNome('')
                setEmail('')
                setMensagem('')
            })
            .catch(() => {
                setStatus('error')
            })
    }

    return (
        <div className='contato'>
            <p className='secao-label'>Entre em contato</p>
            <h2 className='contato-section-titulo'>Contato</h2>

            <div className='contato-form-wrapper'>
                {status === 'success' ? (
                    <div className='contato-success'>
                        <div className='contato-success-icone'>✓</div>
                        <h3 className='contato-success-titulo'>Mensagem Enviada!</h3>
                        <p className='contato-success-msg'>
                            Obrigado por entrar em contato. Responderei em breve!
                        </p>
                        <button
                            type='button'
                            className='contato-btn contato-btn--ghost'
                            onClick={() => setStatus('idle')}
                        >
                            Enviar outra mensagem
                        </button>
                    </div>
                ) : (
                    <form ref={formRef} onSubmit={enviar} className='contato-form'>
                        <div className='contato-field'>
                            <label className='contato-label'>Nome</label>
                            <input
                                name='nome'
                                type='text'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                                className='contato-input'
                                placeholder='Seu nome'
                            />
                        </div>

                        <div className='contato-field'>
                            <label className='contato-label'>Email</label>
                            <input
                                name='email'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className='contato-input'
                                placeholder='seu@email.com'
                            />
                        </div>

                        <div className='contato-field'>
                            <label className='contato-label'>Mensagem</label>
                            <textarea
                                name='mensagem'
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                required
                                className='contato-input contato-textarea'
                                placeholder='Escreva sua mensagem...'
                            />
                        </div>

                        {status === 'error' && (
                            <p className='contato-error'>
                                Não foi possível enviar agora. Tente novamente em instantes.
                            </p>
                        )}

                        <button
                            type='submit'
                            className='contato-btn'
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}
