import styled from '@emotion/styled'
import { colors, spacing, shadows, breakPoints } from '../../styles/constants';

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${spacing.sm};
  box-sizing: border-box;
  box-shadow: ${shadows.deep};
  @media (min-width: ${breakPoints.tablet}) {
    width: 100%;
    margin-right: 1rem;
  }
`
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  color: ${colors.black} ;
  cursor: pointer;
`
const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-left: 16px;
`
const Desc = styled.p`
  color: ${colors.darkgrey};
`
const GenreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
`
const GenreTag = styled.p`
  color: ${colors.white};
  background-color: ${colors.black};
  border-radius: ${spacing.xs};
  padding: 5px 10px;
  margin-right: 6px;
  margin-top: 6px;
  font-size: 12px;
  font-weight: bold;
`
const InfoContainer = styled(HeaderContainer)`
  justify-content: center;
  align-items: center;
  box-shadow: ${shadows.normal};
  border-radius: ${spacing.xxs};
`
const Episodes = styled.p`
  color: ${colors.black};
  margin-top: 6px;
  font-size: 14px;
  font-weight: bold;
  margin-right: 16px;
  span {
    font-size: 20px;
  }
`
const RatingsContainer = styled(Episodes)`
  span {
    color: ${props => props.score > 69 ? colors.green : colors.red}
  }
`

const ContentContainer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  @media (min-width: ${breakPoints.tablet}) {
    max-width: 1000px;
  }
`
export {
  Image,
  HeaderContainer,
  Title,
  Desc,
  Episodes,
  GenreContainer,
  GenreTag,
  InfoContainer,
  RatingsContainer,
  ContentContainer,
}