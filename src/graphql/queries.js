import { gql } from '@apollo/client'

export const GET_ANIME_LIST = gql`
  query Query($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media {
        id
        genres
        averageScore
        popularity
        title {
          romaji
        }
        coverImage {
          large
          medium
        }
        bannerImage
      }
    }
  }
`

export const GET_ANIME = gql`
  query Media($id: Int) {
    Media (id: $id, type: ANIME) {
      id
        genres
        averageScore
        popularity
        description
        episodes
        title {
          romaji
        }
        coverImage {
          large
          medium
        }
        bannerImage
    }
  }
`