import { doRequest } from './baseapi-service'

const RESOURCE = 'series/genero/'

export const listarGeneros = () => {
    return doRequest(RESOURCE, 'GET')
}