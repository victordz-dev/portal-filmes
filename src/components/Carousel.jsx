import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Button from './Button';
import { Link } from 'react-router-dom';


export default function Carousel({banner}) {


return (

      <div className='h-fit pt-[5rem]'>
            <Swiper className='h-[36rem]'
                  slidesPerView={1}
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
            >
                  {banner.slice(0,5)
                        .map(filme => (
                              <SwiperSlide key={filme.id}>
                                          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10 cursor-pointer"></div>
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