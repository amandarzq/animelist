import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ANIME } from '../../graphql/queries';
import { DialogBox } from '../../components';
import { CollectionList } from '../CollectionList'
import { PageLayout, BigButton } from '../../styles/components';
import { AiFillLeftCircle } from 'react-icons/ai';
import { LayoutContext } from '../../context/layout';
import { colors } from '../../styles/constants';
import {
  Image,
  HeaderContainer,
  Title,
  Desc,
  Episodes,
  GenreContainer,
  GenreTag,
  InfoContainer,
  RatingsContainer,
  ContentContainer,
} from './style'

export const AnimeDetail = (props) => {
  const { animeId } = useParams()
  const navigate = useNavigate()
  const { desktopView } = useContext(LayoutContext)
  const [showCollectionModal, setShowCollectionModal] = useState(false)
  const {loading, error, data} = useQuery(GET_ANIME , 
    {  variables: { id: animeId } });

  if (loading){
    return (
      <PageLayout padding="0 16px 2rem 16px">
        loading...
      </PageLayout>
    )
  }

  return (
    <PageLayout padding="0 16px 2rem 16px">
      <HeaderContainer>
        <AiFillLeftCircle size={30} color={colors.black} onClick={() => navigate(-1)}/>
        <Title>
          {data?.Media?.title?.romaji}
        </Title>
      </HeaderContainer>
      <ContentContainer desktopView={desktopView}>
        <Image 
          src={data?.Media?.bannerImage} 
          alt={data?.Media?.title?.romaji} />
        <div>
          <GenreContainer>
            {
              data?.Media?.genres?.map((genre, idx) => {
                return (
                  <GenreTag key={idx}>
                    {genre}
                  </GenreTag>
                )
              })
            }
          </GenreContainer>
          <InfoContainer>
            <Episodes>
              Episodes: <span>{data?.Media?.episodes}</span> 
            </Episodes>
            <RatingsContainer score={data?.Media?.averageScore}>
              Ratings: <span>{data?.Media?.averageScore}</span>/100
            </RatingsContainer>
          </InfoContainer>
          <Desc dangerouslySetInnerHTML={{ __html: `${data?.Media?.description}` }} />
          <BigButton onClick={() => setShowCollectionModal(!showCollectionModal)}>
            Add To Collection
          </BigButton>
        </div>
      </ContentContainer>
      {
        showCollectionModal &&
        <DialogBox 
          ContentComponent={(<CollectionList
          anime={data?.Media} 
          isDialogMode/>)}
          isOpen={showCollectionModal}
          onClose={() => setShowCollectionModal(false)} />
      }
    </PageLayout>
  ) 
}
