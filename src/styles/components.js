import styled from '@emotion/styled'
import { colors, shadows, spacing } from './constants';

const PageLayout = styled.div`
  background-color: ${colors.white};
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
  padding-bottom: 1rem;
  box-sizing: border-box;
  color: ${colors.black};
  position: relative;
  padding: ${props => props.padding ? props.padding : 0};
`

const BigButton = styled.div`
  background-color: ${props => props.background ? props.background : colors.black};
  color: ${props => props.textColor ? props.textColor : colors.white};
  border: ${props => props.border ? props.border : `1px solid ${colors.black}`};
  font-size: ${props => props.fontSize ? props.fontSize : '16px'};
  width: ${props => props.width ? props.width : '100%'};
  border-radius: ${spacing.xs};
  padding: 14px;
  box-sizing: border-box;
  text-align: center;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`

const MediumButton = styled(BigButton)`
  margin: 8px;
  cursor: pointer;
`

const SmallButton = styled(MediumButton)`
  font-size: ${props => props.fontSize ? props.fontSize : '12px'};
  padding: 5px 8px;
`

export {
  PageLayout,
  BigButton,
  MediumButton,
  SmallButton,
}