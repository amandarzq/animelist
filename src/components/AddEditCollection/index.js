import React, { useState, useContext } from 'react'
import { CollectionContext } from '../../context/collection';
import { containsSpecialChars } from '../../utils/helper';
import { BigButton } from '../../styles/components';

export const AddEditCollection = ({ anime, setShowAddCollectionField }) => {
  const [collectionTitle, setCollectionTitle] = useState('')
  const { createCollection, handleAddNotif } = useContext(CollectionContext);

  const onCreateCollection = (title, anime) => {
    if (!collectionTitle) return

    if (containsSpecialChars(title)) {
      setCollectionTitle('')
      return handleAddNotif({
        mode: 'error',
        message: 'Only use alphanumeric characters.'
      })
    }

    createCollection(title, anime)
    setCollectionTitle('')
    setShowAddCollectionField(false)
  }

  return (
    <div style={{ padding: '16px 16px 2.5rem 16px' }}>
      <h2>Create New Collection</h2>
      <input 
        type="text" 
        value={collectionTitle} 
        placeholder="Write collection name here"
        onChange={(e) => setCollectionTitle(e.target.value)} 
        style={{
          boxSizing: 'border-box',
          width: '100%',
          padding: '14px 8px',
          border: '1px solid #363636',
          borderRadius: '8px',
          margin: '0 0 12px 0',
          fontSize: '16px',
          background: '#ECE8EE',
        }}
      />
      <BigButton onClick={() => onCreateCollection(collectionTitle, anime)}>Create Collection</BigButton>
    </div>
  )
}