import sendRequest from './send-request';

const BASE_URL = '/api/tables';

export function getAll() {
    return sendRequest(BASE_URL);
}
  

