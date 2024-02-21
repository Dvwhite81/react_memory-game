export interface HitType {
  id: string
  pageURL: string
  imageURL: string
}

export interface ResponseType {
  total: string
  totalHits: string
  hits: HitType[]
}

export interface ImageType {
  largeImageURL: ResponseType
}
