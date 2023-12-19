import { Image, Wrapper } from './Actor.styles'

type ActorProps = {
  name: string
  character: string
  imageUrl: string
}

const Actor: React.FC<ActorProps> = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt='actor-thumb' />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
)

export default Actor
