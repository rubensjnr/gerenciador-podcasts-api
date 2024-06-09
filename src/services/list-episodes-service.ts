import { FilterModel } from "../models/filter-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/satus-code";

export const serviceListEpisodes = async (): Promise<FilterModel> =>{
  let responseFormat: FilterModel = {
    statusCode: 0,
    body: []
  } 
  const data = await repoPodcast();
  
  if(data.length !== 0){
    responseFormat.statusCode = StatusCode.OK;
  } else{
    responseFormat.statusCode = StatusCode.NOCONTENT;
  }
  responseFormat.body = data;
  return responseFormat;
}