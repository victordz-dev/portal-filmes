import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rate from '../components/Rate';
import CardContainer from '../components/CardContainer';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
import ElencoCard from '../components/ElencoCard';

export default function MovieDetailPage() {

    const { id } = useParams()
    const [movie, setMovie] = useState([])
    const [elenco, setElenco] = useState([])
    const [video, setVideo] = useState([])

    const fetchMovieData = async () => {
        try {

            const [movieResponse, elencoResponse, videoResponse] = await Promise.all(
                [
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`),
                    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`),
                    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=fef4f517897094a9f2326af354ab5b6a`)
                ]
            )

            const movieData = await movieResponse.json()
            const elencoData = await elencoResponse.json()
            const videoData = await videoResponse.json()

            setMovie(movieData)
            setElenco(elencoData.cast)
            setVideo(() => {
                const trailer = videoData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
                return trailer ? trailer.key : null;
            });

        }
        catch { }

    }
    useEffect(() => {
        fetchMovieData();
    }, [])

    const nota = parseFloat(movie.vote_average)
    const notaDecimal = nota.toFixed(1)
    const release = movie.release_date

    function formatarData(filmRelease) {
        const data = new Date(filmRelease);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); 
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
                <div className='pl-12'>
                    <CardContainer title="Elenco">
                        <Swiper
                            slidesPerView={6}
                            >
                                {elenco.map(actorData =>(
                                    <SwiperSlide>
                                        <ElencoCard name={actorData.name} profile_path={actorData.profile_path}/>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </CardContainer>

                    <div className='flex w-full h-fit justify-center mt-20 pb-32'>
                        <div class="w-10/12 h-full">
                            <h2 class="text-lightAccent text-2xl font-semibold mb-4 text-center">Trailer do Filme</h2>
                            <div class="relative">
                                <iframe
                                    id="trailerVideo"
                                    class="w-full h-[600px] rounded-md"
                                    src={ video === null ? 'https://www.youtube.com/embed/8Qn_spdM5Zg' :
                                        `https://www.youtube.com/embed/${video}`
                                    }
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}