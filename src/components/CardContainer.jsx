export default function CardContainer({title, children}){
    return(
        <div className="mt-20 pl-5 w-screen">
            <h1 className="text-4xl font-titles mb-5">{title}</h1>
            {children}
        </div>
    )
}