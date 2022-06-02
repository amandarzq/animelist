import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CollectionContext } from '../../context/collection';
import { PageLayout } from '../../styles/components';
import { ImFileEmpty, ImPlus } from 'react-icons/im';
import { HiOutlineFolderAdd, HiOutlineTrash, HiPencil, HiSaveAs } from 'react-icons/hi';
import { DialogBox, AddEditCollection, ConfirmationDialog } from '../../components';
import { colors } from '../../styles/constants';
import { SmallButton } from '../../styles/components';
import {
  ActionContainer,
  CollectionCard,
  CollectionContainer,
  CreateCollection,
  EditInput,
  EmptyContainer,
  EmptyData,
  Header,
  HeaderCard,
  Image,
  Title,
} from './style'


export const CollectionList = ({ anime, isDialogMode = false, animeArray, bulkAddMode = false, setSelectedAnime }) => {
  const { animeId } = useParams()
  const navigate = useNavigate()
  const { addToCollection, 
    collections,
    handleBulkAddAnime,
    editCollectionName,
    notif
  } = useContext(CollectionContext);
  const [showAddCollectionField, setShowAddCollectionField] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(undefined)
  const [collectionTitle, setCollectionTitle] = useState('')
  const [showEditCollectionName, setShowEditCollectionName] = useState(undefined)

  const handleEditTitle = (id, name) => {
    if (showEditCollectionName) {
      return setShowEditCollectionName(undefined)
    }
    setCollectionTitle(name)
    setShowEditCollectionName(id)
  }

  const handleBulkAdd = (collectionId, animeArray) => {
    handleBulkAddAnime(collectionId, animeArray)
    setSelectedAnime([])
  }

  const onAddAnime = (collectionId, anime) => {
    bulkAddMode ? handleBulkAdd(collectionId, animeArray) : addToCollection(collectionId, anime)
  }

  return (
    <PageLayout padding="16px">
      <Header>
        My Collection
      </Header>
      <CreateCollection onClick={() => setShowAddCollectionField(!showAddCollectionField)}>
        <HiOutlineFolderAdd size={20} />
        <p>Create New Collection</p>
      </CreateCollection>
      {
        collections ?
        <CollectionContainer  
          bulkAddMode={bulkAddMode}
          isDialogMode={animeId ? "dialog" : false}>
          {
            Object.entries(collections)?.map(([key, { title, data, id }], idx) => {
              return (
                <CollectionCard key={idx}>
                  {
                    showEditCollectionName === key ?
                    <div style={{ display: 'flex',
                     maxWidth: '100%' }}>
                      <input
                      type="text"
                      style={{
                        borderRadius: '4px',
                        border: 'none',
                        padding: '0 8px',
                      }}
                      value={collectionTitle} 
                      onChange={(e) => setCollectionTitle(e.target.value)} /> 
                      <SmallButton 
                      onClick={() => editCollectionName(key, collectionTitle)}
                      width="50px">Save</SmallButton>
                    </div>
                      :
                      <HeaderCard
                        onClick={() => navigate(`/collection/${key}`)}>
                        <Title>{title}</Title>
                        <p>({data.length})</p>
                      </HeaderCard>
                  }
                  {
                    data.length ?
                    <Image 
                      onClick={() => navigate(`/collection/${key}`)}
                      src={data[0]?.coverImage?.medium}
                    /> :
                    <EmptyData 
                      onClick={() => animeId ? onAddAnime(key, anime) :  navigate('/')}
                      isDialog={animeId ? "dialog" : false}>
                      <ImPlus size={20}/>
                      <p>{ animeId ? "Add to Collection" : "Add Animes" }</p>
                    </EmptyData>
                  }
                  <ActionContainer>
                    <SmallButton
                    onClick={() => setShowConfirmation(key)}>
                      <HiOutlineTrash size={16} />
                    </SmallButton>
                    <SmallButton 
                      background={colors.white}
                      textColor={colors.black}
                      onClick={() => navigate(`/collection/${key}`)}
                      // onClick={() => handleEditTitle(key, title)}
                      >
                      Details
                    </SmallButton>
                  </ActionContainer>
                  {
                      isDialogMode &&
                      <SmallButton 
                        background={colors.black} 
                        textColor={colors.white} 
                        onClick={() => onAddAnime(key, anime)}>
                        Save To Collection<HiSaveAs size={16} />
                      </SmallButton>
                    }
                </CollectionCard>
              )
            })
          }
        </CollectionContainer> :
        <EmptyContainer>
         {
            bulkAddMode ?
            <div>
  
            </div>
             :
            <div>
              <ImFileEmpty size={30}/>
              <p>No Collections...</p> 
            </div>
         }
        </EmptyContainer> 
      }
      {
        showAddCollectionField &&
        <DialogBox 
          ContentComponent={(<AddEditCollection
          setShowAddCollectionField={setShowAddCollectionField}
          anime={anime}
          />)}
          isOpen={showAddCollectionField}
          onClose={() => setShowAddCollectionField(false)} />
      }
      {
        showConfirmation && 
        <DialogBox 
          ContentComponent={(<ConfirmationDialog
          showConfirmation={showConfirmation}
          setShowConfirmation={setShowConfirmation}
          />)}
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(undefined)} />
      }
    </PageLayout>
  )
}
