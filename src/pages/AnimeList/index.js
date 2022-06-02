import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ANIME_LIST } from '../../graphql/queries';
import { AnimeCard } from '../../components';
import { DialogBox } from '../../components';
import { CollectionList } from '../CollectionList'
import { 
  PaginationContainer,
  PaginationButton,
  HeaderSection, 
  ListContainer,
  SelectButtons,
} from './style'
import { PageLayout, MediumButton } from '../../styles/components';
import { colors } from '../../styles/constants';

export const AnimeList = () => {
  const [page, setPage] = useState(1)
  const [perPage, setPerpage] = useState(10)
  const [selectedAnime, setSelectedAnime] = useState([])
  const [showBulkAddModal, setShowBulkAddModal] = useState(false)
  const [bulkAddMode, setBulkAddMode] = useState(false)
  const {loading, error, data} = useQuery(GET_ANIME_LIST , 
    {  variables: { page, perPage } });
    
  const NextPage = () => {
    setPage(page + 1); 
  }
  const PreviousPage = () => {
    setPage(page - 1);
  }

  const onSelectAnime = (anime) => {
    const filterItem = selectedAnime.find((item) => item.id === anime.id)
    if (!filterItem) {
      return setSelectedAnime([...selectedAnime, anime])
    }
    const newArray = selectedAnime.filter((item) => item.id !== anime.id)
    return setSelectedAnime(newArray)
  }

  return (
    <PageLayout padding="16px"> 
      <HeaderSection>
        <h2>Anime List</h2>
        <p>{data?.Page?.pageInfo?.currentPage} / {data?.Page?.pageInfo?.lastPage}</p>
      </HeaderSection>
      <SelectButtons>
        <MediumButton 
          width='50%'
          background={bulkAddMode ? colors.green : colors.black}
          onClick={() => {
            if (bulkAddMode) setSelectedAnime([])
            setBulkAddMode(!bulkAddMode)
          }}>
          Add Animes To Collection
        </MediumButton>
        {
          selectedAnime.length > 0 &&
            <MediumButton
              width='50%'
              background={selectedAnime.length ? colors.black : colors.white}
              onClick={() => selectedAnime.length ? setShowBulkAddModal(!showBulkAddModal) : {}}>
              Choose Collection
          </MediumButton>
        }
      </SelectButtons>
      <ListContainer>
        {
          loading ?
          "Loading..." :
          data?.Page.media.map((anime, idx) => {
            const isSelected = selectedAnime?.includes(anime)
            return <AnimeCard 
              key={idx} 
              anime={anime} 
              isSelected={isSelected}
              onSelectAnime={onSelectAnime}
              bulkAddMode={bulkAddMode} />
          })
        }
      </ListContainer>
      {
        showBulkAddModal &&
        <DialogBox 
          ContentComponent={(<CollectionList 
          anime={data?.Media} 
          bulkAddMode={bulkAddMode}
          animeArray={selectedAnime}
          setSelectedAnime={setSelectedAnime}
          isDialogMode/>)}
          isOpen={showBulkAddModal}
          onClose={() => setShowBulkAddModal(false)}
        />
      }
      <PaginationContainer>
        <PaginationButton 
          active={data?.Page?.pageInfo?.currentPage !== 1 ? "active" : "disable"} 
          onClick={() => data?.Page?.pageInfo?.currentPage !== 1 ? PreviousPage() : {}} >
            Prev
        </PaginationButton>
        <PaginationButton 
          active={data?.Page?.pageInfo?.hasNextPage ? "active" : "disable"} 
          onClick={() => data?.Page?.pageInfo?.hasNextPage ? NextPage() : {}}>
            Next
        </PaginationButton>
      </PaginationContainer>
    </PageLayout>);
}
