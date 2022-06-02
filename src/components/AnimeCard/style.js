import styled from '@emotion/styled'
import { colors, spacing, shadows, breakPoints } from '../../styles/constants';

const Card = styled.div`
  color: ${colors.black};
  margin: 10px;
  cursor: pointer;
  opacity: ${props => props.isSelected ? 0.5 : 1};
`
const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`
const Image = styled.img`
  width: 100%;
  height: 250px;
  border-radius: ${spacing.sm};
  box-shadow: ${shadows.deep};
  @media (min-width: ${breakPoints.tablet}) {
    height: 360px;
  }
`
export {
  Card,
  Title,
  Image,
}