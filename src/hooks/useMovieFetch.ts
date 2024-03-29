import { useEffect, useState } from 'react'

import API from '../API'
import { isPersistedState } from '../helpers'
import { MovieProps } from '../components/Movie'

export const useMovieFetch = (movieId: string) => {
  const [state, setState] = useState<MovieProps>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true)
        setError(false)
        const movie = await API.fetchMovie(movieId)
        const credits = await API.fetchCredits(movieId)
        const directors = credits.crew.filter(
          (member: any) => member.job === 'Director',
        )
        setState({
          ...movie,
          actors: credits.cast,
          directors,
        })

        setLoading(false)
      } catch (err) {
        setError(true)
      }
    }

    const sessionState = isPersistedState(movieId)
    if (sessionState) {
      setState(sessionState)
      setLoading(false)
      return
    }

    fetchMovie()
  }, [movieId])

  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state))
  }, [movieId, state])

  return {
    movie: state,
    loading,
    error,
  }
}
