import React, { useContext } from 'react'
import { CollectionContext } from '../../context/collection';
import { ConfirmationContainer, ActionContainer } from './style';
import { MediumButton } from '../../styles/components';
import { colors } from '../../styles/constants';

export const ConfirmationDialog = ({ showConfirmation, collectionId, setShowConfirmation, title = "Remove collection?" }) => {
  const { removeCollection, removeFromCollection } = useContext(CollectionContext);
  return (
    <ConfirmationContainer>
      <h2> {title} </h2>
      <ActionContainer>
        <MediumButton
        background={colors.white}
        textColor={colors.black}
          onClick={() => setShowConfirmation(undefined)}>
          Cancel
        </MediumButton>
        <MediumButton 
          background={colors.black} 
          textColor={colors.white}
          onClick={() => {
            collectionId ? removeFromCollection(showConfirmation, collectionId) : removeCollection(showConfirmation)
            setShowConfirmation(undefined)
          }}>
          Remove
        </MediumButton>
      </ActionContainer>
    </ConfirmationContainer>
  )
}