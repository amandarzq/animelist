import styled from '@emotion/styled'
import { colors, shadows, breakPoints } from '../../styles/constants';

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
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 6px;
  margin-top: 1rem;
  box-sizing: border-box;
`
const PaginationButton = styled.div`
  background-color: ${props => props.active === 'active' ? colors.black : colors.darkgrey};
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  font-weight: bolder;
  color: ${colors.white};
  width: 60px;
  text-align: center;
  margin: 8px;
  box-shadow: ${shadows.normal} ;
  -webkit-box-shadow: ${shadows.normal} ;
  -moz-box-shadow: ${shadows.normal} ;
`
const HeaderSection = styled.div`
  color: ${colors.black};
  padding: 10px;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SelectButtons = styled.p`
  display: flex;
`


export {
  PaginationContainer,
  PaginationButton,
  ListContainer,
  HeaderSection,
  SelectButtons,
}