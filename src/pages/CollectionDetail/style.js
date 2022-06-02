
import { colors, breakPoints } from '../../styles/constants';
import styled from '@emotion/styled'

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
const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 10px;
  padding: 0 16px;
  @media (min-width: ${breakPoints.tablet}) {
    grid-template-columns: repeat(5, 1fr);
  }
`

const EmptyContainer = styled.div`]
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  color: ${colors.black};
  p {
    font-size: 14px;
    font-weight: 700;
  }
`

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export {
  ActionContainer,
  EmptyContainer,
  ListContainer,
  HeaderContainer,
  Title,
}