import { Link } from 'react-router-dom';
import Button from './Button';
export default function MovieCard({id, title, name, poster_path}) {
    return(
        <>
            <Link to={`/filme/${id}`}>
                <div className='flex flex-col'>
                    <div className='h-[35vh] w-[35vw]'>
                        <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt={title} className='h-full'/>
                    </div>
                    <div>
                    <h1 className='font-black mb-2'>{title}{name}</h1>
                    </div>
                </div>
            </  Link>
            <Button onClick={()=>alert(`O filme ${title} foi adicionado com sucesso!`)}>Adicionar</Button>
        </>
    )
}