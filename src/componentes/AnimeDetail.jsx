import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../contextos/GlobalContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../estilos/AnimeDetail.css'

export default function AnimeDetail() {
  const { info, getAnimeById, getCharacters, characters } = useGlobalContext()
  const { id } = useParams()

  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    getAnimeById(id)
    getCharacters(id)
  }, [])

  return (
    <div className='anime-detail'>
      <div className='back'>
        <Link to='/'>Back</Link>
      </div>
      <h1>{info.title}</h1>
      <div className='details'>
        <div className='div-grid'>
          <div className='anime-image'>
            <img src={info?.images?.jpg?.large_image_url} alt='' />
          </div>
          <div className='anime-facts'>
            <p>
              Aired: <span> {info.aired?.string}</span>
            </p>
            <p>
              Rank: <span>{info?.rank}</span>
            </p>
            <p>
              Score: <span> {info?.score}</span>
            </p>
            <p>
              Scored by: <span> {info?.scored_by}</span>
            </p>
            <p>
              Popularity: <span> {info?.popularity}</span>
            </p>
            <p>
              Status: <span> {info?.status}</span>
            </p>
            <p>
              Source: <span> {info?.source}</span>
            </p>
            <p>
              Season: <span> {info?.season}</span>
            </p>
            <p>
              Duration: <span> {info?.duration}</span>
            </p>
          </div>
        </div>
        <div className='anime-description'>
          <p>
            {showMore
              ? info?.synopsis.substring(0, 450) + '...'
              : info?.synopsis + '.'}
          </p>
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show more' : 'Show less'}
          </button>
        </div>
      </div>
      <h3>Trailer</h3>
      <div className='trailer'>
        {info?.trailer?.embed_url && (
          <iframe
            src={info?.trailer?.embed_url}
            title='Inline frame example'
            width='800'
            height='450'
            allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture'
            allowFullScreen
          ></iframe>
        )}
      </div>
      <h3>Characters</h3>
      <div className='characters'>
        <div className='character-detail'>
          {characters?.map((character, i) => (
            <Link>
              <div className='character'>
                <img
                  src={character?.character?.images?.jpg?.image_url}
                  alt=''
                />
                <p>{character?.character?.name}</p>
                <p> {character?.role} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
