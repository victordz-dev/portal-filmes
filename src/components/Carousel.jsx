import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Button from './Button';


export default function Carousel({filmesPopulares}) {


return (

      <div className='h-fit pt-20'>
            <Swiper className='h-[36rem]'
                  slidesPerView={1}
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
            >
                  {filmesPopulares.slice(0,5)
                        .map(filme => (
                              <SwiperSlide key={filme.id} className='relative'>
                                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10"></div>
                                    <div className="absolute inset-0 flex items-end justify-center p-20 z-20">
                                          <div className="text-lightAccent space-y-4 max-w-md flex flex-col items-center">
                                                <h1 className="text-2xl font-bold w-fit">{filme.title}</h1>
                                                <Button onClick={() => alert(`O filme '${filme.title}' foi adicionado à lista`)} >Adicionar à lista</Button>
                                          </div>
                                    </div>
                                    <img src={`https://image.tmdb.org/t/p/w1280${filme.backdrop_path}`} className='w-full h-full object-cover' />
                              </SwiperSlide>
                        ))
                  }
            </Swiper> 
      </div>
)}