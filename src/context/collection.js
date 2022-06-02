import { createContext, useState } from 'react';
import { containsSpecialChars } from '../utils/helper';
import { v4 as uuid } from 'uuid';

const userCollection = JSON.parse(localStorage.getItem('collections'))

export const CollectionContext = createContext();

export function CollectionProvider({ children }) {
  const [collections, setCollections] = useState(userCollection);
  const [notif, setNotif] = useState({})

  const changeCollection = (newCollection) => {
    setCollections(newCollection)
    localStorage.setItem('collections', JSON.stringify(newCollection))
  }

  const createCollection = (newTitle, anime) => {
    const nameExists = collections && Object.entries(collections).find(([key, {title}])=> title === newTitle )
    if (nameExists) {
      return setNotif({
        mode: 'error',
        message: 'Collection already exist. Please choose another name'
      })
    }
    const id = uuid()
    const newCollection = {...collections, [id]: { title: newTitle, data: anime ? [anime] : [], id: uuid() }}
    changeCollection(newCollection)
    setNotif({
      mode: 'success',
      message: 'Collection Created'
    })
  }

  const removeCollection = (id) => {
    const newCollection = {...collections}
    delete newCollection[id]
    changeCollection(newCollection)
    setNotif({
      mode: 'success',
      message: 'Collection Deleted'
    })
  }

  const addToCollection = (collectionId, anime) => {
    const findCollection = collections[collectionId]?.data?.find(item => item.id === anime.id)
    if (findCollection) {
      return setNotif({
        mode: 'error',
        message: 'Anime already in Collection'
      })
    }
    const newCollection = {...collections,
      [collectionId] : {
        ...collections[collectionId],
        data: [ ...collections[collectionId]?.data, anime]
      }
    }
    if (!anime) return
    changeCollection(newCollection)
    setNotif({
      mode: 'success',
      message: 'Added to Collection'
    })
  }

  const handleBulkAddAnime = (collectionId, animeArray) => {
    if (!animeArray) return
    const newArray = [ ...collections[collectionId]?.data, ...animeArray]
    const newCollection = {...collections,
      [collectionId] : {
        ...collections[collectionId],
        data: [...new Set(newArray)],
      }
    }
    
    changeCollection(newCollection)
    return setNotif({
      mode: 'success',
      message: 'Animes added to Collection'
    })
  }

  const removeFromCollection = (animeId, collectionId) => {
    const newData = collections[collectionId]?.data?.filter((item) =>  item.id !== animeId )
    const newCollection = {...collections,
      [collectionId] : {
        ...collections[collectionId],
        data: newData,
      }
    }
    changeCollection(newCollection)
    return setNotif({
      mode: 'success',
      message: 'Anime removed from Collection'
    })
  }

  const editCollectionName = (collectionId, newTitle) => {
    if (containsSpecialChars(newTitle)) {
      return setNotif({
        mode: 'error',
        message: 'Only use alphabet and numbers'
      })
    }
    let nameAlreadyUsed = false
    const newCollection = {}
    Object.entries(collections)?.every((collection) => {
      const [key, {title, data, id}] = collection

      if (title === newTitle) {
        return nameAlreadyUsed = true
      }
      if (collectionId === key) {
        return newCollection[key] = { title: newTitle, data, id }
      }
      return newCollection[key] = {title, data, id}
    })
    if (nameAlreadyUsed) {
      return setNotif({
        mode: 'error',
        message: 'Choose another name'
      })
    }
    changeCollection(newCollection)
  }

  const handleAddNotif = (mode, message) => {
    setNotif({
      mode,
      message
    })
  }

  return (
    <CollectionContext.Provider
      value={{
        addToCollection,
        collections,
        createCollection,
        editCollectionName,
        handleBulkAddAnime,
        handleAddNotif,
        notif,
        removeCollection,
        removeFromCollection,
      }}>
      {children}
    </CollectionContext.Provider>
  );
}
