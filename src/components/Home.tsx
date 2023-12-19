import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
import { useHomeFetch } from '../hooks/useHomeFetch'
import NoImage from '../images/no_image.jpg'
import Grid from './Grid'
import HeroImage from './HeroImage'
import Thumb from './Thumb'
import Spinner from './Spinner'
import SearchBar from './Searchbar'
import Button from './Button'
import Error from './Error'

type MovieType = {
  id: string
  image: string
  movieId: string
  poster_path: string
}

const Home = () => {
  const { error, loading, state, setSearchTerm, searchTerm, setIsLoadingMore } =
    useHomeFetch()

  if (error) <Error />

  return (
    <>
      {loading && <Spinner />}
      {!searchTerm && state.results && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0]?.backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map((movie: MovieType) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      )}
    </>
  )
}

export default Home
