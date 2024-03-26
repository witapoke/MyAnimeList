import { Link } from 'react-router-dom'
import '../estilos/Popular.css'
import { useGlobalContext } from '../contextos/GlobalContext'
export default function Popular() {
  const { popularAnimes, getAnimeById } = useGlobalContext()

  return (
    <div className='popularStyle'>
      {popularAnimes.map((anime, i) => (
        <Link to={`/anime/${anime.mal_id}`} key={i}>
          <img src={anime.images.jpg.large_image_url} className='link' />
        </Link>
      ))}
    </div>
  )
}
