import Moviecard from "./MovieCard"

const Fav=({movies})=>{
    return(
        <div>
{
    movies.map((e)=><Moviecard movie={e} key={e.id} />)
}
        </div>
    )
}
export default Fav