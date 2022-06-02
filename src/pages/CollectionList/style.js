import styled from '@emotion/styled'
import { colors, spacing, shadows, breakPoints } from '../../styles/constants';

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 8px auto;
  border-radius: ${spacing.sm};
  box-sizing: border-box;
  box-shadow: ${shadows.deep};
  cursor: pointer;
  @media (min-width: ${breakPoints.tablet}) {
    width: 100%;
    margin-right: 1rem;
  }
`
const EmptyData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 240px;
  width: 100%;
  border-radius: ${spacing.sm};
  box-shadow: ${shadows.deep};
  margin: 8px auto;
  height: 100%;
  cursor: pointer;
  p {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 700;
  }
`

const Header = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-left: 16px;
  border-bottom: 1px solid ${colors.black};
  padding: 10px;
`
const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 0;
  color: ${colors.black};
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

const CreateCollection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  p {
    margin: 0 10px;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.gray};
  }

`

const CollectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 10px;
  padding: 0 16px;
  @media (min-width: ${breakPoints.tablet}) {
    grid-template-columns: ${props => props.isDialogMode || props.bulkAddMode ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)'};
  }
`

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const CollectionCard = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 8px;

`
const CollectionItem = styled.div`
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: center;
`
const EditInput = styled.div`
  display: flex;
  justify-content: space-betweeen;
`
const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 12px;
    font-weight: bold;
    color: ${colors.black};
    @media (min-width: ${breakPoints.tablet}) {
      font-size: 1rem;
    }
  }
`

export {
  ActionContainer,
  CollectionCard,
  CollectionContainer,
  CollectionItem,
  CreateCollection,
  EditInput,
  EmptyContainer,
  EmptyData,
  Header,
  HeaderCard,
  Image,
  Title,
}