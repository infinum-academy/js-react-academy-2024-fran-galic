export interface IShowProps {
   show: IShow
}

export interface IShow {
   title: string,
   description: string,
   averageRating?: number,
   imageUrl?: string
}
