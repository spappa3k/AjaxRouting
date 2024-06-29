export interface AlbumsModel{
    userId: number,
        id: number,
        title: string
}

export interface DetailsModel {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
  }