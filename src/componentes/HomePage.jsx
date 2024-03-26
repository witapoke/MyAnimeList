import { useEffect, useState } from 'react'
import { useGlobalContext } from '../contextos/GlobalContext'
import Popular from './Popular'
import '../estilos/HomePage.css'
export default function HomePage() {
  const { getPopularAnimes, popularAnimes } = useGlobalContext()
  const [rendered, setRendered] = useState('Popular')

  useEffect(() => {
    getPopularAnimes()
  }, [])

  function switchComponent() {
    if (rendered === 'Popular') {
      return <Popular />
    } else if (rendered === 'Airing') {
      return <div>Soy el Airing</div>
    } else if (rendered === 'Upcoming') {
      return <div>Soy el Upcoming</div>
    } else {
      return <div>Soy el Popular</div>
    }
  }

  return (
    <div className='homepage'>
      <header>
        <div className='title'>
          {rendered === 'Popular' ? (
            <h1>Popular</h1>
          ) : rendered === 'Upcoming' ? (
            <h1>Upcoming</h1>
          ) : (
            <h1>Airing</h1>
          )}
        </div>
        <div className='searching-topics'>
          <div className='form-div'>
            <form action='' className='searchForm'>
              <input type='text' placeholder='Search your anime' />
              <button>Search</button>
            </form>
          </div>
          <div className='buttons-div'>
            <button
              className='popularBtn'
              onClick={() => setRendered('Popular')}
            >
              Popular
            </button>
            <button className='airingBtn' onClick={() => setRendered('Airing')}>
              Airing
            </button>
            <button
              className='UpcomingBtn'
              onClick={() => setRendered('Upcoming')}
            >
              Upcoming
            </button>
          </div>
        </div>
      </header>
      {switchComponent()}
    </div>
  )
}
