import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { FilterModel } from '../models/filter-model';

export const getListEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse) => {
  const content: FilterModel = await serviceListEpisodes();
  response.writeHead(content.statusCode,{'Content-Type': ContentType.JSON});
  response.end(JSON.stringify(content.body));
}
export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse)=>{
    const content: FilterModel = await serviceFilterEpisodes(request.url);
    response.writeHead(content.statusCode,{'Content-Type': ContentType.JSON});
    response.end(JSON.stringify(content.body));
}