import * as http from 'http';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse )=>{
  const baseUrl = request.url?.split("?")[0];
  if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
     await getListEpisodes(request,response);
  } 
  if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
    await getFilterEpisodes(request,response);
 }
}