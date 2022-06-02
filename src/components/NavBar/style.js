import styled from '@emotion/styled';
import { colors } from '../../styles/constants';

const Nav = styled.nav`
  color: ${colors.black}; 
  display: flex;
  padding: 16px;
  box-sizing: border-box;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  color: ${colors.black};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    color: ${colors.gray},
  }
`
const Name = styled.p`
  color: ${colors.gray};
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 12px;
    font-weight: bolder;
  &:hover {
    color: ${colors.black},
  }
`

export {
  Nav,
  MenuItem,
  Name,
}