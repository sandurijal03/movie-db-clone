import { Content, Text, Wrapper } from './HeroImage.styles'

type HeroImageProps = {
  image?: any
  title?: any
  text?: any
}

const HeroImage: React.FC<HeroImageProps> = ({ image, title, text }) => {
  return (
    <Wrapper about={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  )
}

export default HeroImage
