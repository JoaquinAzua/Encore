import sendRequest from './send-request';

const BASE_URL = '/api/tickets';

export function getAll() {
    return sendRequest(BASE_URL);
}