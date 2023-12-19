import { Content, Wrapper } from './MovieInfoBar.styles'
import { calcTime, convertMoney } from '../../helpers'

type MovieInfoBarProps = {
  time?: number
  budget?: number
  revenue?: number
}

const MovieInfoBar: React.FC<MovieInfoBarProps> = ({
  time,
  budget,
  revenue,
}) => (
  <Wrapper>
    <Content>
      <div className='column'>
        <p>Running time: {calcTime(time as number)} </p>
      </div>
      <div className='column'>
        <p>Budget: {convertMoney(budget as number)} </p>
      </div>
      <div className='column'>
        <p>Revenue: {convertMoney(revenue as number)} </p>
      </div>
    </Content>
  </Wrapper>
)

export default MovieInfoBar
