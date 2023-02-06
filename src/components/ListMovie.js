import Moviecard from "./MovieCard"

const Listmovies=({movies})=>{
    return(
        <div>
{
    movies.map((e)=><Moviecard movie={e} key={e.id} />)
}
        </div>
    )
}
export default Listmovies