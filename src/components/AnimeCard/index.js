import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Title, Image } from './style';

export const AnimeCard = ({ onSelectAnime, anime, bulkAddMode, isSelected }) => {
  const navigate = useNavigate()

  return (
      <Card 
        isSelected={isSelected}
        onClick={() => bulkAddMode ? onSelectAnime(anime) : navigate(`/${anime?.id}`)}>
        <Image src={anime?.coverImage?.large} alt={anime?.title?.romaji} />
        <Title>
          {anime?.title?.romaji}
        </Title>
      </Card>
    )
}