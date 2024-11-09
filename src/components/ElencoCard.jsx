export default function ElencoCard({ id, name, profile_path }) {
      return (
            <>
                <div className='flex flex-col'>
                    <div className='h-[35vh] w-[35vw]'>
                        <img src={`https://image.tmdb.org/t/p/w1280${profile_path}`} alt={title} className='h-full'/>
                    </div>
                    <div>
                    <h1 className='font-black mb-2'>{title}{name}</h1>
                    </div>
                </div>
            <Button onClick={()=>alert(`O filme ${title} foi adicionado com sucesso!`)}>Adicionar</Button>
        </>
      )
}