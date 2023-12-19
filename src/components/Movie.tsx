import React from 'react'
import { useParams } from 'react-router-dom'

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
import { useMovieFetch } from '../hooks/useMovieFetch'
import Grid from './Grid'
import Spinner from './Spinner'
import NoImage from '../images/no_image.jpg'
import BreadCrumb from './BreadCrumb'
import Error from './Error'
import MovieInfo from './MovieInfo'
import MovieInfoBar from './MovieInfoBar'
import Actor from './Actor'

export type MovieProps = {
  original_title: string
  runtime: number
  budget: number
  revenue: number
  actors: {
    credit_id: number
    name: string
    character: string
    profile_path: string
  }[]
}

const Movie = () => {
  const { movieId } = useParams()

  const { movie, loading, error } = useMovieFetch(movieId as string)

  if (loading) return <Spinner />
  if (error) return <Error />

  return (
    <>
      <BreadCrumb movieTitle={movie && movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie && movie.runtime}
        budget={movie && movie.budget}
        revenue={movie && movie.revenue}
      />
      <Grid header='Actors'>
        {movie &&
          movie.actors &&
          movie.actors.map((actor: any) => (
            <Actor
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : NoImage
              }
            />
          ))}
      </Grid>
    </>
  )
}

export default Movie
