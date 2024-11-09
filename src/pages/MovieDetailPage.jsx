import { act, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rate from '../components/Rate';
import CardContainer from '../components/CardContainer';

export default function MovieDetailPage() {

    const { id } = useParams()
    const [movie, setMovie] = useState([])
    const [elenco, setElenco] = useState([])

    const fetchMovieData = async () => {
        try {

            const [movieResponse, elencoResponse] = await Promise.all(
                [
                    fetch(`https://api.themoviedb.org/3/movie/912649?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`),
                    fetch(`https://api.themoviedb.org/3/movie/912649/credits?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
                ]
            )

            const movieData = await movieResponse.json()
            const elencoData = await elencoResponse.json()

            setMovie(movieData)
            setElenco(elencoData.cast)

        }
        catch { }

    }
    useEffect(() => {
        fetchMovieData();
    }, [])

    const nota = parseFloat(movie.vote_average)
    const notaDecimal = nota.toFixed(1)
    const release = movie.release_date


    const isActor = elenco.map(actor => {
        if (actor.known_for_department === 'Acting') {
            return actor
        }
    })

    


    function formatarData(filmRelease) {
        const data = new Date(filmRelease);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
      }

    return (
            <div className='pt-20 h-screen'>
                <div className='h-1/2 w-full bg-black relative overflow-hidden flex items-center justify-center'>
                    <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} className='w-full object-cover absolute blur-md opacity-60' />
                    <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} className='h-full' />
                </div>
                <div className='p-10 flex flex-col gap-5 px-20'>
                    <div className='flex flex-row items-center justify-between'>
                        <h1 className='text-4xl font-bold'>{movie.title || movie.name}</h1>
                        <p className='flex flex-row gap-5 items-center'><span className='text-xl'>{notaDecimal}</span>
                            <div className='text-yellow-400'>
                                <Rate avaliacao={nota}/>
                            </div>
                        </p>
                    </div>
                    <p>Lançamento: {formatarData(release)}</p>
                    <p> {movie.overview}</p>
                </div>
                <div className='p-10'>
                    <h2 className='text-2xl font-bold'>Elenco</h2>
                    <CardContainer title="Elenco" movieData={isActor}/>
                </div>
            </div>
    )
}