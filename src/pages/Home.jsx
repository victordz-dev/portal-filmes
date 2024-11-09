import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import Carousel from "../components/Carousel";
import MovieCard from "../components/MovieCard"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'

export default function Home() {

    const [filmesPopulares, setFilmesPopulares] = useState([])
    const [filmesTrending, setFilmesTrending] = useState([])
    const [filmesUpcoming, setFilmesUpcoming] = useState([])

    const fetchMovies = async () => {
        try {
            //Juntando todos os fetches
            const [respostaPopulares, respostaTrending, respostaUpcoming] = await Promise.all(
                [
                    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                ]
            )

            //Convertendo em JSON
            const popularData = await respostaPopulares.json()
            const trendingData = await respostaTrending.json()
            const upcomingData = await respostaUpcoming.json()

            //Atualizar o estado
            setFilmesPopulares(popularData.results)
            setFilmesTrending(trendingData.results)
            setFilmesUpcoming(upcomingData.results)

        }
        catch { }

    }
    useEffect(() => {
        fetchMovies();
    }, [])
    

    return (
        <>
            <Carousel banner={filmesPopulares}/>
            
            <CardContainer  title="Mais populares">
                <Swiper
                slidesPerView={6}
                >
                    {filmesPopulares.map(movies =>(
                        <SwiperSlide>
                            <MovieCard key={movies.id} {...movies}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CardContainer>

            <CardContainer  title="Mais vistos hoje">
            <Swiper
            slidesPerView={6}
            >
                {filmesTrending.map(movies =>(
                    <SwiperSlide>
                        <MovieCard key={movies.id} {...movies}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            </CardContainer>

            <CardContainer  title="Em breve">
            <Swiper
            slidesPerView={6}
            >
                {filmesUpcoming.map(movies =>(
                    <SwiperSlide>
                        <MovieCard key={movies.id} {...movies}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            </CardContainer>
        </>
    )
}
