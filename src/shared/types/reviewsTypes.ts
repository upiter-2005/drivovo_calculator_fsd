import { CarType } from "./carAcf"

export type CarReviewTopType = Pick<CarType, "author_review" | "author_review_status" | "author_review_foto">
export interface IReviewTop {
  data : CarReviewTopType
}

export interface IReview {
  data : CarType,
  text: string,
  photo: string
}