import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CollectionContext } from '../../context/collection';
import { PageLayout, SmallButton } from '../../styles/components';
import { AiFillLeftCircle } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';
import { ImFileEmpty } from 'react-icons/im';
import { DialogBox, ConfirmationDialog } from '../../components';
import { colors } from '../../styles/constants';
import { AnimeCard } from '../../components';
import { ActionContainer,
  EmptyContainer,
  ListContainer,
  HeaderContainer,
  Title, 
} from './style';

export const CollectionDetail = () => {
  const { collectionId } = useParams()
  const navigate = useNavigate()
  const { collections, editCollectionName } = useContext(CollectionContext);
  const collection = collections[collectionId]
  const { title, data } = collection || {}
  const [showConfirmation, setShowConfirmation] = useState(undefined)
  const [showEditModal, setShowEditModal] = useState(false)
  const [collectionTitle, setCollectionTitle] = useState(title)

  return (
    <PageLayout padding="0 16px 2rem 16px">
       <HeaderContainer>
        <AiFillLeftCircle size={30} color={colors.black} onClick={() => navigate(-1)}/>
        <Title>
          {title}
        </Title>
      </HeaderContainer>
      {/* <button onClick={() => setShowEditModal(!showEditModal)}>edit</button> */}
      {
        showEditModal &&
        <div>
          <input
          type="text"
          value={collectionTitle} 
          onChange={(e) => setCollectionTitle(e.target.value)} /> 
          <button onClick={() => editCollectionName(collectionId, collectionTitle)}>edit title</button>
        </div>
      }
      <ListContainer>
        {
          data.length > 0 ?
          data?.map((anime, idx) => {
            const { averageScore, bannerImage, title, id } = anime
            return (
              <div key={idx}>
                <AnimeCard 
                  key={idx} 
                  anime={anime} 
                  onClick={() => navigate(`/${id}`)}
                  />
                <ActionContainer>
                  <SmallButton onClick={() => setShowConfirmation(anime)}>
                    <HiOutlineTrash size={16} />
                  </SmallButton>
                  <SmallButton 
                    background={colors.white}
                    textColor={colors.black}
                    onClick={() => navigate(`/${id}`)}>
                    Detail
                  </SmallButton>
                </ActionContainer>
              </div>
            )
          }) :
          <EmptyContainer>
            <ImFileEmpty size={30}/>
              <p>No Collections...</p> 
          </EmptyContainer>
        }
      </ListContainer> 
      {
        showConfirmation &&
         <DialogBox 
          ContentComponent={(<ConfirmationDialog
            showConfirmation={showConfirmation.id}
            setShowConfirmation={setShowConfirmation}
            collectionId={collectionId}
            title="Remove From Collection?"
          />)}
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(undefined)} />
      }
    </PageLayout>
  )
}