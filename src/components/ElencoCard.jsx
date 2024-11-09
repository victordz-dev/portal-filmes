export default function ElencoCard({ name, profile_path }) {

    const noImage = "../src/assets/no_img.jpg"

      return (
            <>
                <div className='flex flex-col'>
                    <div className='h-[35vh] w-[35vw]'>
                        {profile_path===null ? <img src={noImage} alt={name} className='w-[210px] h-full'/> :
                        <img src={`https://image.tmdb.org/t/p/w1280${profile_path}`} alt={name} className='h-full'/>}
                    </div>
                    <div>
                    <h1 className='font-black mb-2'>{name}</h1>
                    </div>
                </div>
        </>
      )
}