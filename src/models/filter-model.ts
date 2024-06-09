import { PodcastModel } from "./podcast-model";

export interface FilterModel{
  statusCode: number,
  body: PodcastModel[]
}