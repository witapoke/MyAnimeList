import {
  createContext,
  useEffect,
  useState,
  useReducer,
  useContext
} from 'react'

const GlobalContext = createContext()

const GET_POPULAR_ANIMES = 'GET_POPULAR_ANIMES'
const GET_ANIME_BY_ID = 'GET_ANIME_BY_ID'
const LOADING = 'LOADING'
const GET_CHARACTERS = 'GET_CHARACTERS'

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: true }
    }
    case GET_POPULAR_ANIMES: {
      return {
        ...state,
        popularAnimes: action.payload,
        loading: false
      }
    }
    case GET_ANIME_BY_ID: {
      return {
        ...state,
        info: action.payload,
        loading: false
      }
    }
    case GET_CHARACTERS: {
      return {
        ...state,
        characters: action.payload,
        loading: false
      }
    }
  }
}

export const GlobalContextProvider = ({ children }) => {
  const estadoInicial = {
    airingAnimes: [],
    popularAnimes: [],
    upcomingAnimes: [],
    pictures: [],
    characters: [],
    info: [],
    loading: false
  }

  const [state, dispatch] = useReducer(reducer, estadoInicial)

  const getPopularAnimes = async () => {
    const response = await fetch(
      'https://api.jikan.moe/v4/top/anime?filter=bypopularity'
    )
    const data = await response.json()
    console.log(data.data)
    dispatch({ type: GET_POPULAR_ANIMES, payload: data.data })
  }

  const getAnimeById = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const data = await response.json()
    console.log(data.data)
    dispatch({ type: GET_ANIME_BY_ID, payload: data.data })
  }

  const getCharacters = async (id) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${id}/characters`
    )
    const data = await response.json()
    console.log(data.data)
    dispatch({ type: GET_CHARACTERS, payload: data.data })
  }

  return (
    <GlobalContext.Provider
      value={{ ...state, getPopularAnimes, getAnimeById, getCharacters }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
