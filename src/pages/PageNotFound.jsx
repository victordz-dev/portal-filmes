import {Link} from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div className='h-screen flex flex-col items-center justify-center gap-11'>
            <h1 className='font-titles text-4xl'>Página não encontrada!</h1>
            <p className='font-bold'>Retorne para a página inicial clicando <Link to="/" className='text-main'>aqui</Link></p>
        </div>
    )
}